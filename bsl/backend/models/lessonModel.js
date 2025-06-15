const mongoose = require('mongoose');
const lessonSchema = new mongoose.Schema(
    {
        courseId: { type: String, required: true },
        title: { type: String, required: true },
        videoUrl: { type: String, required: true },
        content: { type: String, required: true },
        duration: { type: String, required: true },
        order: { type: String, required: true }
    },
    {
        timestamps: true
    }
)
module.export = mongoose.model("Lesson", lessonSchema);