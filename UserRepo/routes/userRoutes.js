const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.get('/admin-emails', userController.getAdminEmails);

module.exports = router;
