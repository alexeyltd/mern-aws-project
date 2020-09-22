const AWS = require("aws-sdk");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { registerEmailParams } = require("../helpers/email");
const shortId = require("shortid");
const expressJwt = require("express-jwt");

exports.read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};
