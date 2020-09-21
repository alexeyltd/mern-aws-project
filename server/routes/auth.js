const express = require("express");
const router = express.Router();
const { register, registerActivate, login, requireSignin } = require("../controllers/auth");
const {
  userRegusterValidator,
  userLoginValidator,
} = require("../validators/auth");
const { runValidation } = require("../validators");

router.post("/register", userRegusterValidator, runValidation, register);
router.post("/register/activate", registerActivate);
router.post("/login", userLoginValidator, runValidation, login);
router.get("/secret", requireSignin, (req, res) => {
  res.json({
    data: `secret page`,
  });
});

module.exports = router;
