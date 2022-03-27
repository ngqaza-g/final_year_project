const Token = require('../models/Token');
const crypto = require('crypto');

const logout = async (req, res)=>{
    try{
        const { token } = req.body; 
        const hash_token = crypto.createHash('SHA256').update(token).digest('hex');
        await Token.deleteOne({token : hash_token});
        res.json({msg: "Logged Out"});
    }catch{
        res.status(500).json({msg: "A Server Error Occured"});
    }
}

module.exports = logout;