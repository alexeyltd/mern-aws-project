const express = require("express");
const router = express.Router();
const {
  categoryCreateValidator,
  categoryUpdateValidator,
} = require("../validators/category");
const { runValidation } = require("../validators");

const { requireSignin, adminAuthMiddleware } = require("../controllers/auth");
const {create, list, read, update, remove} = require('../controllers/category')

router.post('/category', runValidation, requireSignin, adminAuthMiddleware, create);

router.get("/categories", list);
router.get("/category/:slug", read);
router.patch(
  "/category/:slug",
  categoryUpdateValidator,
  runValidation,
  requireSignin,
  adminAuthMiddleware,
  update
);
router.delete(
  "/category/:slug",
  categoryUpdateValidator,
  runValidation,
  requireSignin,
  adminAuthMiddleware,
  remove
);

module.exports = router;
