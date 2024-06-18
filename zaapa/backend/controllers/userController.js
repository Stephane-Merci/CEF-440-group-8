const User = require('../models/userModel')

// Register user

const registerUser = async(req, res) => {
    const { name, email, password, phoneNumber } = req.body;

    try {
       const newUser = new User({
            name,
            email,
            password,
            phoneNumber
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}


// Login user

const loginUser = (req, res) => {
    res.json({mssg:"Login user set"})
}

module.exports = {registerUser, loginUser}