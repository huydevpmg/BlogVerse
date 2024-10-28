const User = require("../models/user.model");
const generateVerificationCode = require("../utils/generateVerificationCode");
const bcrypt = require("bcryptjs");
const generateTokenAndSetCookies = require("../utils/generateTokenAndSetCookies");

const signup = async (req, res) => {
	const { email, password, name } = req.body;

	try {
		if (!email || !password || !name) {
			throw new Error("All fields are required");
		}

		const userAlreadyExists = await User.findOne({ email });

		if (userAlreadyExists) {
			return res.status(400).json({ success: false, message: "User already exists" });
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		const verificationToken = generateVerificationCode();

		const user = new User({
			email,
			password: hashedPassword,
			name,
			verificationToken,
			verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
		});

    console.log(user)
		await user.save();

		// jwt
    const userID = user._id;

		generateTokenAndSetCookies(res, userID);

		res.status(201).json({
			success: true,
			message: "User created successfully",
			user: {
				...user._doc,
				password: undefined,
			},
		});
	} catch (error) {
		res.status(400).json({ success: false, message: error.message });
	}
};

const signin = async (req, res) => {
  res.send("signin");
};

const logout = async (req, res) => {
  res.send("logout");
};

module.exports = {
  signup,
  signin,
  logout
};
