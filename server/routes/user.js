const express = require("express");
const router = express.Router();
const {
  requireSignin,
  authMiddleware,
  adminAuthMiddleware,
} = require("../controllers/auth");
const {
  userRegusterValidator,
  userLoginValidator,
} = require("../validators/auth");
const { runValidation } = require("../validators");

const { read } = require("../controllers/user");

router.get("/user", requireSignin, authMiddleware, read);
router.get("/admin", requireSignin, adminAuthMiddleware, read);

module.exports = router;
