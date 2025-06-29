// Tải và cấu hình biến môi trường từ file .env
// Tác dụng: đảm bảo các biến như PORT, MONGODB_URI được load trước khi ứng dụng khởi động
const dotenv = require('dotenv');
dotenv.config();

// Khai báo thư viện cần thiết
const express = require("express");
const mongoose = require('mongoose'); // Import mongoose
const userRoutes = require('./routes/UserRoutes'); // Import UserRoutes

// Khởi tại ứng dụng Expres
const app = express();

// Middleware để phân tích cú pháp JSON từ body request
app.use(express.json());

// Lấy cổng PORT được cấu hình trong .env
const port = process.env.PORT || 3001
const mongoURI = process.env.MONGO_DB;

// Kết nối MongoDB
mongoose.connect(mongoURI, {})
.then(() => {
    console.log('Kết nối MongoDB thành công!');
})
.catch(err => {
    console.error('Lỗi kết nối MongoDB:', err);
    process.exit(1); // Thoát ứng dụng nếu không thể kết nối DB
});

// Định nghĩa routes gốc
app.get('/', (req, res) => {
    res.send('Chạy thành công!')
})

// Sử dụng routes của người dùng
app.use('/api/user', userRoutes);

// Khởi động Server Express
app.listen(port, () => {
    // Log khi server bắt đầu
    console.log('Chạy cổng PORT thành công! Cổng: ', + port);
})