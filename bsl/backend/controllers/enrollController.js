const enrollmentModel = require('../models/enrollModel');

// Insert Enrollment
const enrollmentInsert = async (req, res) => {
    try {
        const { userId, courseId } = req.body;
        const enrollment = new enrollmentModel({ userId, courseId });
        await enrollment.save();
        res.send({ status: true, message: "Enrollment successful", data: enrollment });
    } catch (err) {
        console.error("Error enrolling:", err);
        res.status(500).send({ status: false, message: "Error enrolling user" });
    }
};

// View all Enrollments
const enrollmentView = async (req, res) => {
    try {
        const enrollments = await enrollmentModel.find();
        res.send({ status: true, data: enrollments });
    } catch (err) {
        console.error("Error fetching enrollments:", err);
        res.status(500).send({ status: false });
    }
};

module.exports = { enrollmentInsert, enrollmentView };
