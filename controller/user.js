const User = require("../model/user")
const jwt = require('jsonwebtoken');

const options = {
    expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
    httpOnly: true
}

exports.register = async (req, res) => {
    try {
        const user = await User.create(req.body);

        const token = await user.generateToken();

        res.status(201).cookie("accessToken", token, options).json({
            success: true,
            user,
            token
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            res.status(400).json({
                success: false,
                message: "invalid email"
            });
        }

        const isTrue = await user.isPasswordMatched(password);

        if (!isTrue) {
            res.status(400).json({
                success: false,
                message: "incorrect password bruh"
            });
        }

        const token = await user.generateToken();

        res.status(201).cookie("accessToken", token, options).json({
            success: true,
            user,
            token
        });


    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.logoutUser = async (req, res) => {
    try {
        res.status(200).cookie("accessToken", null, { expires: new Date(Date.now()), httpOnly: true }).json({
            success: true,
            message: "Successfully logged out"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.loadUser = async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}