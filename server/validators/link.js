const { check } = require("express-validator");

exports.linkCreateValidator = [
  check("title").not().isEmpty().withMessage("Title is required"),
  check("url").not().isEmpty().withMessage("URL is required"),
  check("categories").not().isEmpty().withMessage("Categories is required"),
  check("type").not().isEmpty().withMessage("Type is required"),
  check("medium").not().isEmpty().withMessage("Medium is required"),
];

exports.linkUpdateValidator = [
    check("title").not().isEmpty().withMessage("Title is required"),
    check("url").not().isEmpty().withMessage("URL is required"),
    check("categories").not().isEmpty().withMessage("Categories is required"),
    check("type").not().isEmpty().withMessage("Type is required"),
    check("medium").not().isEmpty().withMessage("Medium is required"),
];
