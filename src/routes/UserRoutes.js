const express = require('express');
const userController = require('../controllers/UserController');

const router = express.Router();

// GET /api/user
router.get('/', userController.getAllUsers);
// POST /api/user
router.post('/', userController.createUser);

module.exports = router;