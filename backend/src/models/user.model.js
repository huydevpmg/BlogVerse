const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      require: true
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"]
    },
    profilePic: {
      type: String,
      default: ""
    },
    lastLogin: {
      type: Date,
      default: Date.now()
    },
    isVerified: {
      type: Boolean,
      default: false
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
