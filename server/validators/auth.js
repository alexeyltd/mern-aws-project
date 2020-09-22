const { check } = require("express-validator");

exports.userRegusterValidator = [
  check("name").not().isEmpty().withMessage("Name is required"),
  check("email").isEmail().withMessage("Email should be valid"),
  check("password").isLength({ min: 6 }).withMessage("Password is less then 6"),
];

exports.userLoginValidator = [
  check("email").isEmail().withMessage("Email should be valid"),
  check("password").isLength({ min: 6 }).withMessage("Password is less then 6"),
];

exports.userForgotEmailValidator = [
  check("email").isEmail().withMessage("Email should be valid"),
];

exports.userResetPasswordValidator = [
  check("resetPasswordLink").not().isEmpty().withMessage("Token is required"),
  check("newPassword")
    .isLength({ min: 6 })
    .withMessage("Password is less then 6"),
];
