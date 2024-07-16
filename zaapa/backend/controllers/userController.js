const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const validator = require('validator');

// Function to create a JWT token
const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '7d' });
};

// Function to handle user registration
const registerUser = async (req, res) => {
    const { name, email, password, phoneNumber } = req.body;

    try {
        // Input validation
        if (!name || !email || !password || !phoneNumber) {
            return res.status(400).json({ error: 'Please enter all ' });
        }

        // Email format validation
        if (!validator.isEmail(email)) {
            return res.status(400).json({ error: 'This email is not in the correct format' });
        }

        // Password strength validation
        if (!validator.isStrongPassword(password)) {
            return res.status(400).json({ error: 'This password is not strong enough. Make sure it contains numbers and special characters' });
        }

        // Phone number format validation
        if (!validator.isMobilePhone(phoneNumber, 'any', { strictMode: true })) {
            return res.status(400).json({ error: 'This phone number is not in the correct format' });
        }

        // Check if email or phone number already exists
        const emailExists = await User.findOne({ email });
        if (emailExists) {
            return res.status(400).json({ error: 'This email is already in use' });
        }

        const phoneExists = await User.findOne({ phoneNumber });
        if (phoneExists) {
            return res.status(400).json({ error: 'This phone number is already in use' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({ name, email, password: hash, phoneNumber });

        // Save user and generate JWT token
        const user = await newUser.save();
        const token = createToken(user._id);

        res.status(200).json({ name, email, phoneNumber, token });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Function to handle user login
const loginUser = async (req, res) => {
    const { emailOrPhone, password } = req.body;

    try {
        // Find user by email or phone number
        const user = await User.findOne({ $or: [{ email: emailOrPhone }, { phoneNumber: emailOrPhone }] });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or phone number' });
        }

        // Verify password
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ error: 'Incorrect password' });
        }

        // Generate JWT token
        const token = createToken(user._id);

        res.status(200).json({ emailOrPhone, token });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { registerUser, loginUser };