const Token = require('../models/Token');
const crypto = require('crypto');

const renew_token = async (req, res)=>{
    try{
        const user = req.user;
        const expire = (1000 * 3600 * 24 * 7) + Date.now();
        const token = crypto.randomBytes(256).toString('hex');
        const hash_token = crypto.createHash('SHA256').update(token).digest('hex');
        await Token.findOneAndUpdate({user_id : user._id}, {token: hash_token, expire: expire});
        const userData = {
            name : user.name,
            email : user.email,
            username : user.username,
            role : user.role
        };
        res.json({msg : "Logged in", user : userData, token : token});
        
    }catch{
        res.status(500).json({msg: "A Server error occured"});
    }

}


module.exports = renew_token;