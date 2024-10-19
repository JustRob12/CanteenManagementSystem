// backend/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    lastname: { type: String, required: true },
    firstname: { type: String, required: true },
    middlename: { type: String, optional: true },
    studentId: { type: String, required: true, unique: true },
    year: { type: String, required: true },
    course: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
module.exports = User;
