const express = require("express");
const router = express.Router();
const { register, registerActivate } = require("../controllers/auth");
const { userRegusterValidator } = require("../validators/auth");
const { runValidation } = require("../validators");

router.post("/register", userRegusterValidator, runValidation, register);
router.post("/register/activate", registerActivate);

module.exports = router;
