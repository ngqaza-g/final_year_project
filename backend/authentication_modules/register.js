const bcrypt = require('bcryptjs');
const User = require('../models/User');

const register = async (req, res)=>{
    try{
        const {firstName, lastName, username, email, role} = req.body;
        let name = "";
        name = name.concat(firstName, " ", lastName);
        const password = username;

        const user = await User.findOne({username : username, email : email});
        console.log(user);
        if(!user){
            const hashedPassword = await bcrypt.hash(password, 10);  
            const newUser = new User({
                name : name,
                username : username,
                email : email,
                password : hashedPassword,
                role : role
            });
            await newUser.save();
            res.json({msg: "User Registered"})
    
        }else{
            res.status(404).json({msg : "User already exists"});
        }

    }catch{
        res.status(500).json({msg: "A Server Error Occured"})
    }

    
}

module.exports = register;