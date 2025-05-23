const express = require('express');
const router = express.Router();
const { getUsers, registerUser } = require('../controllers/userControllers');

router.get('/', getUsers);
router.post('/register', registerUser);

module.exports = router;
