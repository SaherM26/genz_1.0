const courseModel = require('../models/courseModel');

const courseInsert = async (req, res) => {
    try {
        let { title, description, category, price, instructor, thumbnailUrl, lessons, ratings } = req.body;
        let course = new courseModel({
            title,
            description,
            category,
            price,
            instructor,
            thumbnailUrl,
            lessons,
            ratings
        });
        await course.save();
        res.status(201).json({ status: true, message: "Course created successfully" });
    } catch (err) {
        console.error("Error saving course:", err);
        res.status(500).json({ status: false, message: "Error saving course" });
    }
};

const courseView = async (req, res) => {
    try {
        let courses = await courseModel.find();
        res.send({ status: true, data: courses });
    } catch (err) {
        console.error("Error fetching courses:", err);
        res.status(500).json({ status: false, message: "Error fetching courses" });
    }
};

const courseGet = async (req, res) => {
    try {
        let course = await courseModel.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ status: false, message: "Course not found" });
        }
        res.send({ status: true, data: course });
    } catch (err) {
        console.error("Error fetching course:", err);
        res.status(500).json({ status: false, message: "Error fetching course" });
    }
};

const courseDelete = async (req, res) => {
    try {
        const result = await courseModel.deleteOne({ _id: req.params.id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ status: false, message: "Course not found" });
        }
        res.send({ status: true, message: "Course deleted successfully" });
    } catch (err) {
        console.error("Error deleting course:", err);
        res.status(500).json({ status: false, message: "Error deleting course" });
    }
};

const courseUpdate = async (req, res) => {
    try {
        let { title, description, category, price, instructor, thumbnailUrl, lessons, ratings } = req.body;
        const result = await courseModel.updateOne(
            { _id: req.params.id },
            { title, description, category, price, instructor, thumbnailUrl, lessons, ratings }
        );
        if (result.modifiedCount === 0) {
            return res.status(404).json({ status: false, message: "Course not found or data unchanged" });
        }
        res.send({ status: true, message: "Course updated successfully" });
    } catch (err) {
        console.error("Error updating course:", err);
        res.status(500).json({ status: false, message: "Error updating course" });
    }
};

module.exports = { courseInsert, courseView, courseGet, courseDelete, courseUpdate };
