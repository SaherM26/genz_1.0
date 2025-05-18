let mongoose = require("mongoose");
let courseSchema = new mongoose.Schema(
    {
        title: {
            type: String, require: true
        },
        slug: {
            type: String, require: true
        },
        description: {
            type: String, require: true
        },
        category: {
            type: String, require: true
        },
        price: {
            type: Number, require: true
        },
        instructor: {
            type: String, require: true
        },
        thumbnailUrl: {
            type: String, require: true
        },
        lessons: {
            type: String, require: true
        },
        ratings: {
            type: Number, require: true
        },
        published: {
            type: Boolean, require: true
        },
        createdAt: {
            type: String, require: true
        }
    }
);

module.exports = mongoose.model("Course", courseSchema);
