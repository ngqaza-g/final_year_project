const bcrypt = require('bcryptjs');
const User = require('../models/User');

const change_password = async (req, res)=>{

    try{
        const { current_password, new_password } = req.body;
        //Validate the token
    
        //Get the user
        const user = req.user;
        //Compare the passwords
        
        const isMatch = await bcrypt.compare(current_password, user.password);
        if(isMatch){
             // Update the database with the new password
            const hashedPassword = await bcrypt.hash(new_password, 10);
            await User.updateOne({_id: user._id} , {password: hashedPassword});
            console.log(user);
            res.json({msg: "Successfully changed the password"});
        }else{
            res.status(401).json({msg: "Passwords dont match"});
        }

    }catch{
            // Handle errors or success
        res.status(500).json({msg: "Server Error occured"});
    }
}

module.exports = change_password;





