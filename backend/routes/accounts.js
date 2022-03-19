const express = require('express');
const change_password = require('../authentication_modules/change_password');
const login = require('../authentication_modules/login');
const logout = require('../authentication_modules/logout');
const register = require('../authentication_modules/register');
const validate_token = require('../authentication_modules/validate_token');

const router = express.Router();

router.post('/', validate_token, (req, res)=>{
    const user = req.user;
    const userData = {
        name : user.name,
        email : user.email,
        username : user.username,
        role: user.role
    };
    res.json({msg : "logged in", user : userData});
});

router.post('/register', register);

router.post('/login', login);

router.post('/logout', [validate_token ,logout]);

router.post('/change_password', [validate_token, change_password, logout]);

module.exports = router;