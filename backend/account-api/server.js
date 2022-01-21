const mongoose = require('mongoose');
const User = require('./models/User');
const Token = require('./models/Token');

mongoose.connect('mongodb://localhost:27017/server', {useNewUrlParser : true}).then(()=>{
        console.log('Connected to db');
    }).catch((error)=>{
        console.log('Failed to connect');
        console.error(error);
    });

const Ngqa = new User({ 
name : 'Ngqabutho Dlamini',
email : "ngqaza.dlamz47@gmail.com",
username : "ngqaza_g",
password : "password"
})

// Ngqa.save().then(()=>{
// console.log("user saved")
// mongoose.connection.close();
// })
// .catch(()=>{
// console.log("an error occured");
// mongoose.connection.close();
// })

User.find({username : "ngqaza_g"}).then(doc =>{
    console.log(doc);
    mongoose.connection.close();
}).catch(err =>{
    console.log("an error occured");
    console.error(err);
    mongoose.connection.close();
});

