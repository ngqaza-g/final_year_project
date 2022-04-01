const Token = require('../models/Token');
const User = require('../models/User');
const crypto = require('crypto');


const validate_token = async (req, res, next)=>{
    try{

        const { token } = req.body;
    
        if(token){
            try{
                const hash_token = crypto.createHash('SHA256').update(token).digest('hex');
                const token_data = await Token.findOne({token : hash_token});
                if(token_data){
                    const user = await  User.findOne({_id : token_data.user_id});
                    if(user){
                        req.user = user;
                        next();
                    }else{
                        res.status(404).json({msg : "Token user id does not exist"});
                    }
                }else{
                    res.status(404).json({msg : "Invalid token"});
                }
    
            }catch{
                res.status(500).json({msg : "Failed to varify token"});
            }
        }else{
            res.status(404).json({msg : "No token passed"});
        }
    }catch{
        res.status(500).json({msg: "Server Error Occured"});
    }

}

module.exports = validate_token;