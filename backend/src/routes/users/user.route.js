const express = require("express");
const userRoute = express.Router();

const { verifyToken } = require("../../middleware/verifyToken");

const { getAllUsers } = require("../../controllers/user.controller");
userRoute.get("/getAllUsers", verifyToken, getAllUsers);

module.exports = userRoute;
