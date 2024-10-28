const express = require("express");
const auth = require("./auth/auth.route");
const api = express.Router();

api.use("/api/auth", auth);

module.exports = api;
