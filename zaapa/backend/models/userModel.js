const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String, // Changed to String
        required: true,
        unique: true
    }
}, { timestamps: true }); // Added timestamps

module.exports = mongoose.model('User', UserSchema);
