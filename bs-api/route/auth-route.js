const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const authController = require('../controller/auth-controller');

//Routes
router.get('/verifyToken/:token', authController.verifyToken);
router.post('/login', authController.login);
router.post('/signupKabir', authController.signupAdmin);


module.exports = router;
