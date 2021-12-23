const express = require('express');
const router = express.Router();

const mailController = require('../controller/mail-controller');

//Routes
router.post('/', mailController.sendMail);

module.exports = router;
