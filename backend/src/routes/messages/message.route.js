const express = require("express");
const messageRoute = express.Router();

const {
  sendMessage,
  getMessages,
  getUsersForSidebar,
} = require("../../controllers/message.controller");
const { verifyToken } = require("../../middleware/verifyToken");

messageRoute.get("/getMessage/:id", verifyToken, getMessages);
messageRoute.post("/sendMessage/:id", verifyToken, sendMessage);
messageRoute.get("/getUsersForSidebar", verifyToken, getUsersForSidebar); 
module.exports = messageRoute;
