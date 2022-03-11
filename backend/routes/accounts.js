const express = require('express');
const login = require('../authentication_modules/login');
const logout = require('../authentication_modules/logout');
const register = require('../authentication_modules/register');
const validate_token = require('../authentication_modules/validate_token');

const router = express.Router();

router.post('/', validate_token);

router.post('/register', [register, login]);

router.post('/login', login);

router.post('/logout', logout);

module.exports = router;