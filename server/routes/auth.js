const express = require("express");
const router = express.Router();
const {
  register,
  registerActivate,
  login,
  forgotPassword,
  resetPassword
} = require("../controllers/auth");
const {
  userRegusterValidator,
  userLoginValidator,
  userForgotEmailValidator,
  userResetPasswordValidator,
} = require("../validators/auth");
const { runValidation } = require("../validators");

router.post("/register", userRegusterValidator, runValidation, register);
router.post("/register/activate", registerActivate);
router.post("/login", userLoginValidator, runValidation, login);
router.patch("/forgot-password", userForgotEmailValidator, runValidation, forgotPassword);
router.patch("/reset-password", userResetPasswordValidator, runValidation, resetPassword);

module.exports = router;
