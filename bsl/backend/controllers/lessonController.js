const lessonModel = require("../models/lessonModel");

const lessonInsert = async (req, res) => {
    try {
        let { courseId, title, videoUrl, content, duration, order } = req.body;
        let lesson = new lessonModel({
            courseId,
            title,
            videoUrl,
            content,
            duration,
            order
        });
        await lesson.save();
        res.status(201).json({ status: true, message: "Lesson created successfully" });
    }
    catch (err) {
        console.error("Error saving lessons:", err);
        res.status(500).json({ status: false, message: "Error saving lessons" });
    }
};

const lessonView = async (req, res) => {
    try {
        let lesson = await lessonModel.find();
        res.send({ status: true, data: lesson });
    } catch (err) {
        console.error("Error fetching lessons:", err);
        res.status(500).json({ status: false, message: "Error fetching lessons" });
    }
};

const lessonGet = async (req, res) => {
    try {
        let lesson = await lessonModel.findById(req.params.id);
        if (!lesson) {
            return res.status(404).json({ status: false, message: "lesson not found" });
        }
        res.send({ status: true, data: lesson });
    } catch (err) {
        console.error("Error fetching lesson:", err);
        res.status(500).json({ status: false, message: "Error fetching lesson" });
    }
};

const lessonDelete = async (req, res) => {
    try {
        const result = await lessonModel.deleteOne({ _id: req.params.id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ status: false, message: "lesson not found" });
        }
        res.send({ status: true, message: "lesson deleted successfully" });
    } catch (err) {
        console.error("Error deleting lesson:", err);
        res.status(500).json({ status: false, message: "Error deleting lesson" });
    }
};

const lessonUpdate = async (req, res) => {
    try {
        let { title, description, category, price, instructor, thumbnailUrl, lessons, ratings } = req.body;
        const result = await lessonModel.updateOne(
            { _id: req.params.id },
            { title, description, category, price, instructor, thumbnailUrl, lessons, ratings }
        );
        if (result.modifiedCount === 0) {
            return res.status(404).json({ status: false, message: "lesson not found or data unchanged" });
        }
        res.send({ status: true, message: "lesson updated successfully" });
    } catch (err) {
        console.error("Error updating lesson:", err);
        res.status(500).json({ status: false, message: "Error updating lesson" });
    }
};

module.exports = { lessonInsert, lessonView, lessonGet, lessonDelete, lessonUpdate };