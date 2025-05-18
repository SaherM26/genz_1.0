const User = require('../models/User');

// Test route
exports.getUsers = (req, res) => {
    res.send("✅ User API is working");
};

// Register user
exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
