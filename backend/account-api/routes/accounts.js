const express = require('express');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const Token = require('../models/Token');
const User = require('../models/User');

const router = express.Router();

const register = (req, res, next)=>{
    const {name, username, email, password} = req.body;

    res.json(req.body);
    User.find({username : username, email : email}).then((doc)=>{
        if(doc.length === 0){
            bcrypt.hash(password, 10).then(hashedPassword =>{
                const newUser = new User({
                    name : name,
                    username : username,
                    email : email,
                    password : hashedPassword
                });
    
                newUser.save().then(()=>{
                    next();
                }).catch((error)=>{
                    res.status(500).json({msg: "Failed to register new user", error : error});
                });
            }).catch(()=>{
                res.status(500).json({msg : "Failed to register new user"})
            })
            
        }else{
            res.status(404).json({msg : "User already exists"});
        }
    }).catch((error)=>{
        res.status(500).json({msg: "An error occured while registering", error: error});
    });
}

const login = (req, res)=>{
    const {username, password} = req.body;

    User.find({username : username}).then(doc =>{
        
        if(doc.length !== 0){
            const [ user ] = doc;

            bcrypt.compare(password, user.password).then(isMatch =>{
                if(isMatch){
                    const expire = (1000 * 3600 * 24 * 7) + Date.now();
                    const token = crypto.randomBytes(256).toString('hex');
                    
                    const newToken = new Token({
                        token : token,
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

const validateToken = (req, res)=>{
    const { token } = req.body;

    if(token){
        Token.find({token : token}).then(doc =>{
            if(doc.length !== 0){
                const [token_data] = doc;
                User.find({_id : token_data.user_id}).then(doc =>{
                    const [ user ] = doc;
                    const userData = {
                        name : user.name,
                        email : user.email,
                        username : user.username
                    };
                    res.json({msg : "logged in", user : userData});
                })
            }else{
                res.status(404).json({msg : "Invalid token"});
            }
        }).catch(()=>{
            res.status(500).json({msg : "Failed to varify token"});
        })
    }else{
        res.status(404).json({msg : "No token password"})
    }

}

router.post('/', validateToken);

router.post('/register', [register, login]);

router.post('/login', login);

module.exports = router;