const express = require("express");

const authRoute = express.Router();
const {
  signup,
  signin,
  logout,
  verifyEmail,
  forgotPassword,
  resetPassword,
  checkAuth
} = require("../../controllers/auth.controller");

const { verifyToken } = require("../../middleware/verifyToken");

authRoute.get("/check-auth", verifyToken, checkAuth);

authRoute.post("/signup", signup);

authRoute.post("/login", signin);

authRoute.get("/logout", logout);

authRoute.post("/verify-email", verifyEmail);

authRoute.post("/forgot-password", forgotPassword);
authRoute.post("/reset-password/:token", resetPassword);

module.exports = authRoute;
