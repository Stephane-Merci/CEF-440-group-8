const User = require('../models/userModel')

// Register user

const registerUser = (req, res) => {
    res.json({mssg:"register user set"})
}

// Login user

const loginUser = (req, res) => {
    res.json({mssg:"Login user set"})
}

module.exports = {registerUser, loginUser}