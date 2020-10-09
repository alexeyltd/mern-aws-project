const { check } = require("express-validator");

exports.categoryCreateValidator = [
  check("name").not().isEmpty().withMessage("Name is required"),
  check("image").not().isEmpty().withMessage("Image is required"),
  check("content").isLength({ min: 3 }).withMessage("Content is less then 3"),
];

exports.categoryUpdateValidator = [
    check("name").not().isEmpty().withMessage("Name is required"),
    check("content").isLength({ min: 20 }).withMessage("Content is less then 6"),
  ];
