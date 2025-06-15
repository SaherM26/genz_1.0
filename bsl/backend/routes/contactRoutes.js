const express = require("express");
const router = express.Router();
const { contactInsert, contactView } = require("../controllers/contactController");

router.post("/contact-insert", contactInsert); // http://localhost:5000/web/api/contact/contact-insert
router.get("/contact-view", contactView);       // http://localhost:5000/web/api/contact/contact-view

module.exports = router;
