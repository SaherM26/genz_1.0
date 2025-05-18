const courseModel = require('../models/courseModel');

const courseInsert = async (req, res) => {
    let { title, slug, description, category, price, instructor, thumbnailUrl, lessons, ratings, published, createdAt } = req.body
    let course = new courseModel({
        coutitle: title,
        couslug: slug,
        coudescription: description,
        coucategory: category,
        couprice: price,
        couinstructor: instructor,
        couthumbnailUrl: thumbnailUrl,
        coulessons: lessons,
        couratings: ratings,
        coupublished: published,
        coucreatedAt: createdAt
    });
    course.save().then(() => {
        res.send("course");
    }
    ).catch((err) => {
        console.error("Error saving course:", err);
    });

}
const courseUpdate = async (req, res) => {

}
const courseDelete = async (req, res) => {

}
const courseView = async (req, res) => {

}

module.exports = { courseInsert, courseUpdate, courseDelete, courseView };