const express = require('express');
const change_password = require('../authentication_modules/change_password');
const login = require('../authentication_modules/login');
const logout = require('../authentication_modules/logout');
const register = require('../authentication_modules/register');
const renew_token = require('../authentication_modules/renew_token');
const successful_login = require('../authentication_modules/successful_login');
const validate_token = require('../authentication_modules/validate_token');


const router = express.Router();

router.post('/', validate_token, async (req, res)=>{
    const user = req.user;
    successful_login(res, user);
});

router.post('/register', register);

router.post('/login', login);

router.post('/logout', [validate_token ,logout]);

router.post('/change_password', [validate_token, change_password]);

router.post('/renew_token', [validate_token, renew_token]);

module.exports = router;