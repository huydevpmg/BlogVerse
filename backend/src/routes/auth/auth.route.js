const express = require("express");

const auth = express.Router();
const { signup, signin, logout, verifyEmail } = require("../../controllers/auth.controller");

auth.post("/signup", signup);

auth.get("/login", signin);

auth.get("/logout", logout);

auth.post("/verify-email", verifyEmail)

module.exports = auth;
