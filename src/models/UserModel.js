const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        // Type: kiểu data, required: buộc bắt có dữ liệu, trim = true: loại bỏ khoảng trắng đầu và cuối
        name: {
            type: String, required: true, trim: true
        },
        email: {
            type: String, required: true, trim: true, 
            unique: true, // Không được trùng lặp
            lowercase: true, // Lưu về dạng chữ thường
            match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Vui lòng nhập một địa chỉ email hợp lệ'], 
        },
        dateOfBirth: {
            type: Date,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
            trim: true,
        },
        image: {
            type: String,
            default: null,
        },
        role: {
            type: String,
            default: 1, // Mặc định là người dùng
        },
        codeAction: {
            type: String,
            default: null,
        },
        isAction: {
            type: Boolean,
            default: false,
        },
    },
    {
        // Time createdAt và updateAt
        timestamps: true,
        collection: 'users' // <--- THÊM DÒNG NÀY ĐỂ CHỈ ĐỊNH TÊN COLLECTION LÀ 'user'
    }
);

module.exports = mongoose.model('User', UserSchema);