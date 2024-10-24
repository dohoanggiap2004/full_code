const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('../config/dbConn');
const router = express.Router();

router.post('/auth/register', async (req, res) => {
    const { username, password } = req.body;
    const connection = await pool.getConnection();
    try {
        console.log('Connect successfully');
        
        // Kiểm tra xem người dùng đã tồn tại chưa
        const [results] = await connection.execute('SELECT * FROM users WHERE username = ?', [username]);
        
        if (results.length > 0) {
            await connection.release(); // Đóng kết nối
            return res.status(400).send('Username already exists');
        }

        // Mã hóa mật khẩu
        const hashedPassword = await bcrypt.hash(password, 10);

        // Lưu người dùng mới vào cơ sở dữ liệu
        await connection.execute('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);

        await connection.release(); // Đóng kết nối
        res.status(201).send('User registered successfully');
    } catch (err) {
        console.log('Error registering user:', err);
        res.status(500).send('Server error');
    } finally{
      if (connection) connection.release();  // Release MySQL connection back to the pool
    }
});

module.exports = router