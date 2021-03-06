const Token = require('../models/Token');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const login = async (req, res)=>{

    try{
        
        const {username, password} = req.body;
        const user = await User.findOne({username : username});
        if(Object.keys(user).length !== 0){
            const isMatch = await bcrypt.compare(password, user.password);
            if(isMatch){
                const expire = (1000 * 3600 * 24 * 7) + Date.now();
                const token = crypto.randomBytes(256).toString('hex');
                const hash_token = crypto.createHash('SHA256').update(token).digest('hex');
                
                const newToken = new Token({
                    token : hash_token,
                    user_id : user._id,
                    expire : expire
                });
            
    
                await newToken.save();
                const userData = {
                    name : user.name,
                    email : user.email,
                    username : user.username,
                    role : user.role
                }
                
                res.json({msg : "Logged in", user : userData, login_token : token});
            }else{
                res.status(404).json({msg : "Wrong password"});
            }
            
        }else{
            res.status(404).json({msg : `User with username ${username} does not exist`});
        }
    }catch{
        res.status(500).json({msg: "A Server Error Occured"})
    }

}

module.exports = login;