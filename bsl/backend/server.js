const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const courseModel = require('../backend/models/courseModel');
const { courseInsert, courseUpdate, courseDelete, courseView } = require('../backend/controllers/courseController');
const courseRoute = require('../backend/routes/courseRoutes');

dotenv.config();        // Read .env file
connectDB();            // Connect to MongoDB

const app = express();
app.use(cors());        // Allow frontend to talk to backend
app.use(express.json()); // To understand JSON data
app.use("/web/api/course", courseRoute);

// Use our user routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', require('./routes/userRoutes'));
app.get('/', (req, res) => {
    res.send('👋 Welcome to the Biosteup backend API!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
