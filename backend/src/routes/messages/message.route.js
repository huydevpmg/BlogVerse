const express = require("express");
const messageRoute = express.Router();

const {
  sendMessage,
  getMessage
} = require("../../controllers/message.controller");
const { verifyToken } = require("../../middleware/verifyToken");

//require controller here

messageRoute.get("/getMessage/:id", verifyToken, getMessage);
messageRoute.post("/sendMessage/:id", verifyToken, sendMessage);

module.exports = messageRoute;
