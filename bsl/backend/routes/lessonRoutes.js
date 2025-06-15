const express = require('express');
const router = express.Router();
const
    {
        lessonInsert,
        lessonView,
        lessonGet,
        lessonDelete,
        lessonUpdate
    } = require('../controllers/lessonController');

// POST:Create new lesson
router.post("/lesson-insert", lessonInsert);//http://localhost:5000/web/api/lesson/lesson-insert
// GET: View all lesson
router.get("/lesson-view", lessonView);//http://localhost:5000/web/api/lesson/lesson-view
// GET: Get lesson by ID
router.get("/lesson-get/:id", lessonGet);//http://localhost:5000/web/api/lesson/lesson-get/:id
// DELETE: Delete lesson by ID
router.delete("/lesson-delete/:id", lessonDelete); //http://localhost:5000/web/api/lesson/lesson-delete/:id
// PUT: Update lesson by ID
router.put("/lesson-update/:id", lessonUpdate);//http://localhost:5000/web/api/lesson/lesson-update/:id
module.exports = router;