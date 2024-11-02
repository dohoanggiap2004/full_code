const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../app/models/User');
const {sequelize} = require('../config/sequelizeConnect');


router.post('/auth/register', async (req, res) => {
    const {username, password, ...userInfo} = req.body;

    try {
        console.log('Connect successfully');

        // Kiểm tra xem người dùng đã tồn tại chưa
        const [results] = await sequelize.query('SELECT * FROM users WHERE username = ?', {
            replacements: [username],
        });

        if (results.length > 0) {
            return res.status(400).send('Username already exists');
        }

        // Mã hóa mật khẩu
        const hashedPassword = await bcrypt.hash(password, 10);

        // Lưu người dùng mới vào cơ sở dữ liệu
        await User.create({
            username: username,
            password: hashedPassword,
            ...userInfo,
        })
        console.log('User registered successfully');
        res.status(201).send('User registered successfully');
    } catch (err) {
        console.log('Error registering user:', err);
        res.status(500).send('Server error');
    }
});

module.exports = router
