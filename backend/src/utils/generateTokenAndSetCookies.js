const jwt = require("jsonwebtoken");

const generateTokenAndSetCookies = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d"
  });

  res.cookie("token", token, {
    httpOnly: true, // XSS
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict", //csrf
    maxAge: 7 * 24 * 60 * 60 * 1000 //7days
  });

  return token;
};

module.exports = generateTokenAndSetCookies;
