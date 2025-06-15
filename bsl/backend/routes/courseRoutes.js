const express = require('express');
const router = express.Router();

const {
    courseInsert,
    courseView,
    courseGet,
    courseDelete,
    courseUpdate
} = require('../controllers/courseController');

// POST:Create new course
router.post("/course-insert", courseInsert);//http://localhost:5000/web/api/course/course-insert

// GET: View all courses
router.get("/course-view", courseView);//http://localhost:5000/web/api/course/course-view

// GET: Get course by ID
router.get("/course-get/:id", courseGet);//http://localhost:5000/web/api/course/course-get/:id

// DELETE: Delete course by ID
router.delete("/course-delete/:id", courseDelete); //http://localhost:5000/web/api/course/course-delete/:id

// PUT: Update course by ID
router.put("/course-update/:id", courseUpdate);//http://localhost:5000/web/api/course/course-update/:id

module.exports = router;