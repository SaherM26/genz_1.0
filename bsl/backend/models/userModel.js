const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    gender: { type: String, enum: ['male', 'female', 'others'], default: 'male' },
    email: { type: String, unique: true },
    password: { type: String, unique: true },
    role: { type: String, enum: ['student', 'instructor', 'admin'], default: 'student' }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);