const express = require('express');
const { registerUser, loginUser, getUserInfo } = require('../controllers/authController');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', verifyToken, getUserInfo);

module.exports = router;
