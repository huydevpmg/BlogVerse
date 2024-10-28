const express = require("express");

const auth = express.Router();
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

auth.get("/check-auth", verifyToken, checkAuth);

auth.post("/signup", signup);

auth.post("/login", signin);

auth.get("/logout", logout);

auth.post("/verify-email", verifyEmail);

auth.post("/forgot-password", forgotPassword);
auth.post("/reset-password/:token", resetPassword);

module.exports = auth;
