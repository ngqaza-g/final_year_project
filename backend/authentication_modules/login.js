const Token = require('../models/Token');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const login = (req, res)=>{
    const {username, password} = req.body;

    User.find({username : username}).then(doc =>{
        
        if(doc.length !== 0){
            const [ user ] = doc;

            bcrypt.compare(password, user.password).then(isMatch =>{
                if(isMatch){
                    const expire = (1000 * 3600 * 24 * 7) + Date.now();
                    const token = crypto.randomBytes(256).toString('hex');
                    const hash_token = crypto.createHash('SHA256').update(token).digest('hex');
                    
                    const newToken = new Token({
                        token : hash_token,
                        user_id : user._id,
                        expire : expire
                    });
                

                    newToken.save().then(()=>{
                        const userData = {
                            name : user.name,
                            email : user.email,
                            username : user.username
                        }
                        
                        res.json({msg : "Logged in", user : userData, login_token : token});

                    }).catch(()=>{
                        res.status(500).json({msg : "Server failed to login the user"});
                    });
                                
                }else{
                    res.status(404).json({msg : "Wrong password"});
                }
            })
            
        }else{
            res.status(404).json({msg : "User with that username does not exist"});
        }
    }).catch((err)=>{
        res.status(500).json({msg : "An error occured while loging in", error : err});
    });
}

module.exports = login;