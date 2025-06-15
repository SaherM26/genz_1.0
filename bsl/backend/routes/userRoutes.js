const express = require('express');
const router = express.Router();
const { userInsert, userGet, userDelete } = require('../controllers/userControllers');

router.get('/login/:id', userGet);
router.post('/user-register', userInsert);
router.delete('/user-delete/:id', userDelete);

module.exports = router;