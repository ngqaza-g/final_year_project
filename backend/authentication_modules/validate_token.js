const Token = require('../models/Token');
const User = require('../models/User');
const crypto = require('crypto');


const validate_token = (req, res)=>{
    const { token } = req.body;

    if(token){
        const hash_token = crypto.createHash('SHA256').update(token).digest('hex');
        Token.find({token : hash_token}).then(doc =>{
            if(doc.length !== 0){
                const [token_data] = doc;
                User.find({_id : token_data.user_id}).then(doc =>{
                    if(doc.length != 0){
                        const [ user ] = doc;
                        const userData = {
                            name : user.name,
                            email : user.email,
                            username : user.username
                        };
                        res.json({msg : "logged in", user : userData});
                    }else{
                        res.status(404).json({msg : "Token user id does not exist"});
                    }
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

module.exports = validate_token;