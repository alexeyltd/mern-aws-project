const AWS = require("aws-sdk");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { registerEmailParams } = require("../helpers/email");
const shortId = require("shortid");

AWS.config.update({
  accessKeyId: "AKIAVMH6DLZBF5TDUOOE",
  secretAccessKey: "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",
  region: "us-east-2",
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
          res.json({
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
