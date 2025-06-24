// Tải và cấu hình biến môi trường từ file .env
// Tác dụng: đảm bảo các biến như PORT, MONGODB_URI được load trước khi ứng dụng khởi động
const dotenv = require('dotenv');
dotenv.config();

// Khai báo thư viện cần thiết
const express = require("express");

// Khởi tại ứng dụng Expres
const app = express();
// Lấy cổng PORT được cấu hình trong .env
const port = process.env.PORT || 3001

// Định nghĩa routes gốc
app.get('/', (req, res) => {
    res.send('Chạy thành công!')
    //res.json({ message: "Chào mừng bạn đến với API RESTful của tôi!" });
})

// Khởi động Server Express
app.listen(port, () => {
    // Log khi server bắt đầu
    console.log('Chạy cổng PORT thành công! Cổng: ', + port);
})