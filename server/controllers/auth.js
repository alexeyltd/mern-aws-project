const AWS = require("aws-sdk");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const {
  registerEmailParams,
  forgotPasswordEmailParams,
} = require("../helpers/email");
const shortId = require("shortid");
const _ = require("lodash");
const expressJwt = require("express-jwt");

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACESS_KEY,
  region: process.env.AWS_REGION,
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

exports.register = (req, res) => {
  const { name, email, password } = req.body;

  User.findOne({ email }).exec((err, user) => {
    if (user) {
      console.log(err);
      return res.status(400).json({
        message: "Email is taken",
      });
    } else {
      const token = jwt.sign(
        { name, email, password },
        process.env.JWT_ACCOUNT_ACTIVATION,
        {
          expiresIn: "10m",
        }
      );

      const params = registerEmailParams(email, token);
      const sendPromise = ses.sendEmail(params).promise();

      sendPromise
        .then((data) => {
          console.log("email has been submitted to SES", data);
          res.json({
            message: `Email has been sent to ${email}, Follow the instructions to complete your registration`,
          });
        })
        .catch((err) => {
          console.log(`SES email on register`, err);
          res.status(404).json({
            message: `We could not verify your email. Please try again.`,
          });
        });
    }
  });
};

exports.registerActivate = (req, res) => {
  const { token } = req.body;
  jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        error: "Expired link.Try again.",
      });
    }
    const { name, email, password } = decoded;
    const username = shortId.generate();

    User.findOne({ email }).exec((err, user) => {
      if (user) {
        return res.status(401).json({
          error: "Email is taken.",
        });
      }

      const userModel = new User({ username, name, email, password });
      userModel.save((err, result) => {
        if (err) {
          return res.status(401).json({
            error: "Email saving user in database.",
          });
        }
        return res.status(201).json({
          message: "Registration success. Please log in",
        });
      });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }).exec((err, user) => {
    if (err || !user) {
      return res.status(404).json({
        error: "User with that email does not exist.",
      });
    }
    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: "Email and password does not match.",
      });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    const { _id, name, email, role } = user;
    return res.json({
      token,
      user: { _id, name, email, role },
    });
  });
};

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
});

exports.authMiddleware = (req, res, callback) => {
  const authUserId = req.user._id;
  User.findOne({ _id: authUserId }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: `user not found`,
      });
    }
    req.profile = user;
    callback();
  });
};

exports.adminAuthMiddleware = (req, res, callback) => {
  const adminAuthUserId = req.user._id;
  User.findOne({ _id: adminAuthUserId }).exec((err, user) => {
    if (err || !user) {
      return res.status(404).json({
        error: `user not found`,
      });
    }
    if (user.role !== "admin") {
      return res.status(404).json({
        error: `admin resource. Access denied.`,
      });
    }
    req.profile = user;
    callback();
  });
};

exports.forgotPassword = (req, res) => {
  const { email } = req.body;
  User.findOne({ email }).exec((err, user) => {
    if (err || !user) {
      return res.status(404).json({
        error: `user with that email does not exist`,
      });
    }
    const token = jwt.sign(
      { name: user.name },
      process.env.JWT_RESET_PASSWORD,
      {
        expiresIn: "10m",
      }
    );
    const params = forgotPasswordEmailParams(email, token);

    return user.updateOne({ resetPasswordLink: token }, (err, success) => {
      if (err) {
        return res.status(400).json({
          error: `Password reset failed, Try later.`,
        });
      }
      const sendEmail = ses.sendEmail(params).promise();
      sendEmail
        .then((data) => {
          console.log(`ses reset pw ${data}`);
          return res.json({
            message: `Email has been sent to ${email}. Click on the link to reset password`,
          });
        })
        .catch((err) => {
          console.log(`ses reset pw error ${err}`);
          return res.json({
            message: `We could not veridy your email. Try later.`,
          });
        });
    });
  });
};

exports.resetPassword = (req, res) => {
  const { resetPasswordLink, newPassword } = req.body;
  if (resetPasswordLink) {
    jwt.verify(
      resetPasswordLink,
      process.env.JWT_RESET_PASSWORD,
      (err, success) => {
        if (err) {
          return res.status(400).json({
            error: `Expired link. Try again.`,
          });
        }
        User.findOne({ resetPasswordLink }).exec((err, user) => {
          if (err || !user) {
            return res.status(400).json({
              error: `Invalid token`,
            });
          }
          const updateFields = {
            password: newPassword,
            resetPasswordLink: "",
          };
          user = _.extend(user, updateFields);
          user.save((err, result) => {
            if (err) {
              return res.status(400).json({
                error: `Password reset failed. Try again`,
              });
            }
            res.json({
              message: "great! now you can log in with your new password",
            });
          });
        });
      }
    );
  }
};
