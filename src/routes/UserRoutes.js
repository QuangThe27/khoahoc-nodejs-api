// src/routes/UserRoutes.js

const express = require('express');
const userController = require('../controllers/UserController'); // Import UserController

const router = express.Router();

// Định nghĩa route để lấy tất cả người dùng
// GET /api/user
router.get('/', userController.getAllUsers);

// Định nghĩa route để tạo người dùng mới
// POST /api/user
router.post('/', userController.createUser);

// (Tùy chọn) Thêm các route khác cho người dùng (ví dụ: lấy theo ID, cập nhật, xóa)
// router.get('/:id', userController.getUserById);
// router.put('/:id', userController.updateUser);
// router.delete('/:id', userController.deleteUser);

module.exports = router;
