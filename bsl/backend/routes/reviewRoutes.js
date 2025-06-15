const express = require("express");
const route = express.Router();
const { reviewInsert, reviewViewByCourse } = require("../controllers/reviewController");

route.post("/review-insert", reviewInsert); // POST http://localhost:5000/web/api/review/review-insert
route.get("/reviews/:courseId", reviewViewByCourse); // GET reviews by courseId

module.exports = route;
