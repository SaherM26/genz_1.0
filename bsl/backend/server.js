const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

const courseRoute = require('../backend/routes/courseRoutes');
const lessonRoute = require('../backend/routes/lessonRoutes');
const reviewRoute = require('../backend/routes/reviewRoutes');
const enrollRoute = require('../backend/routes/enrollRoutes');
const contactRoute = require('../backend/routes/contactRoutes');
const userRoute = require('../backend/routes/userRoutes')
dotenv.config();        // Read .env file
connectDB();            // Connect to MongoDB

const app = express();
app.use(cors());        // Allow frontend to talk to backend
app.use(express.json()); // To understand JSON data
app.use("/web/api/course", courseRoute);
app.use("/web/api/lesson", lessonRoute);
app.use("/web/api/review", reviewRoute);
app.use("/web/api/enroll", enrollRoute);
app.use("/web/api/contact", contactRoute);
app.use("/web/api/user", userRoute);

app.get('/', (req, res) => {
    res.send('👋 Welcome to the Biosteup backend API!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});