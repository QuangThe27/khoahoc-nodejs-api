const UserModel = require('../models/UserModel'); // Import UserModel

// Controller để lấy tất cả người dùng
const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find(); // Lấy tất cả người dùng từ cơ sở dữ liệu
        res.status(200).json({
            message: 'Lấy danh sách người dùng thành công',
            data: users
        });
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi server khi lấy danh sách người dùng',
            error: error.message
        });
    }
};

// Controller để tạo người dùng mới
const createUser = async (req, res) => {
    try {
        const newUser = new UserModel(req.body); // Tạo một instance mới của UserModel từ dữ liệu gửi lên
        await newUser.save(); // Lưu người dùng mới vào cơ sở dữ liệu

        res.status(201).json({ // 201 Created
            message: 'Tạo người dùng mới thành công',
            data: newUser
        });
    } catch (error) {
        // Xử lý lỗi trùng email (unique: true)
        if (error.code === 11000) { // MongoDB duplicate key error code
            return res.status(409).json({ // 409 Conflict
                message: 'Email đã tồn tại. Vui lòng sử dụng email khác.',
                error: error.message
            });
        }
        // Xử lý lỗi validation (ví dụ: trường required bị thiếu, định dạng email sai)
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ // 400 Bad Request
                message: 'Dữ liệu không hợp lệ',
                errors: errors
            });
        }
        res.status(500).json({ // 500 Internal Server Error
            message: 'Lỗi server khi tạo người dùng mới',
            error: error.message
        });
    }
};

module.exports = {
    getAllUsers,
    createUser
};
