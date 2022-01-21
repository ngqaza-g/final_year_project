const mongoose = require('mongoose');

const tokenSchema = mongoose.Schema({
    token : String,
    user_id : String,
    expire : String
});

const Token = mongoose.model('token', tokenSchema);

module.exports = Token;