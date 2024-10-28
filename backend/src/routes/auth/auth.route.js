const express = require("express");

const auth = express.Router();
const { signup, signin, logout } = require("../../controllers/auth.controller");

auth.post("/signup", signup);

auth.get("/login", signin);

auth.get("/logout", logout);

module.exports = auth;
