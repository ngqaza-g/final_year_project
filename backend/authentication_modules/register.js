const bcrypt = require('bcryptjs');
const User = require('../models/User');

const register = (req, res, next)=>{
    const {name, username, email, password, role} = req.body;
    
    User.find({username : username, email : email}).then((doc)=>{
        if(doc.length === 0){
            bcrypt.hash(password, 10).then(hashedPassword =>{
                const newUser = new User({
                    name : name,
                    username : username,
                    email : email,
                    password : hashedPassword,
                    role : role
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

module.exports = register;