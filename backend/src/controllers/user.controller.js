const User = require("../models/user.model.js");
const getAllUsers = async (req, res) => {
  try {
    const loggedInUserId = req.user._id.toString();
    const filterUser = await User.find({ _id: { $ne: loggedInUserId } }).select(
      "-password"
    );
    res.status(200).json(filterUser);
  } catch (error) {
    console.log("Error in getAllUsers: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAllUsers };
