const express = require("express");
const authRoute = require("./auth/auth.route");
const userRoute = require("./users/user.route");
const messageRoute = require("./messages/message.route");
const api = express.Router();

api.use("/api/auth", authRoute);
api.use("/api/message", messageRoute);
api.use("/api/user", userRoute);

module.exports = api;
