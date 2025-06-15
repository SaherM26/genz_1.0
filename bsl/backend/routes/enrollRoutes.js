const express = require('express');
const router = express.Router();
const { enrollmentInsert, enrollmentView } = require('../controllers/enrollController');

router.post("/enrollment-insert", enrollmentInsert); // http://localhost:5000/web/api/enrollment/enrollment-insert
router.get("/enrollment-view", enrollmentView);     // http://localhost:5000/web/api/enrollment/enrollment-view

module.exports = router;
