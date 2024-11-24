const express = require("express");

const authRoute = express.Router();
const {
  signup,
  login,
  logout,
  verifyEmail,
  forgotPassword,
  resetPassword,
  checkAuth,
  updateProfile
} = require("../../controllers/auth.controller");

const { verifyToken } = require("../../middleware/verifyToken");

authRoute.get("/check-auth", verifyToken, checkAuth);
authRoute.post("/signup", signup);
authRoute.post("/login", login);
authRoute.get("/logout", logout);
authRoute.post("/verify-email", verifyEmail);
authRoute.post("/forgot-password", forgotPassword);
authRoute.post("/reset-password/:token", resetPassword);
authRoute.put("/update-profile", verifyToken, updateProfile);



module.exports = authRoute;
