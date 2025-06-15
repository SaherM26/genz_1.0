const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, trim: true },
        description: { type: String, required: true },
        category: { type: String, required: true },
        price: { type: Number, required: true, min: 0 },
        instructor: { type: String, required: true },
        thumbnailUrl: { type: String },
        lessons: {
            type: [String],
            default: []
        },
        ratings: {
            type: Number,
            default: 0,
            min: 0,
            max: 5
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Course", courseSchema);
