const reviewModel = require("../models/reviewModel");

const reviewInsert = async (req, res) => {
    let { courseId, userId, rating, comment } = req.body;

    try {
        let review = new reviewModel({ courseId, userId, rating, comment });
        await review.save();

        res.send({ status: true, message: "Review submitted successfully" });
    } catch (err) {
        console.error("Error saving review:", err);
        res.status(500).send({ status: false, message: "Review not saved" });
    }
};

const reviewViewByCourse = async (req, res) => {
    let courseId = req.params.courseId;

    try {
        let reviews = await reviewModel.find({ courseId });
        res.send({ status: true, data: reviews });
    } catch (err) {
        console.error("Error fetching reviews:", err);
        res.status(500).send({ status: false });
    }
};

module.exports = { reviewInsert, reviewViewByCourse };
