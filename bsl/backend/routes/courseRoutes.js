let express = require('express');
let route = express.Router();
let { courseInsert, courseUpdate, courseDelete, courseView } = require('../controllers/courseController');

route.post("/course-insert", courseInsert); //http://localhost:5000/web/api/course/course-insert
route.put("/course-update", courseUpdate);
route.delete("/course-delete", courseDelete);
route.get("/course-view", courseView);

module.exports = route