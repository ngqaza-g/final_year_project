const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cors({
    origin : "http://localhost:3000"
}));
// app.use(cookieParser());
app.use('/', require('./routes/accounts'));

const PORT = 5000;

mongoose.connect('mongodb://localhost:27017/backend', {useNewUrlParser : true}).then(()=>{
    app.listen(PORT, ()=> console.log(`SERVER STARTED ON PORT ${PORT}`));
}).catch((error)=>{
    console.log("FAILED TO START THE SERVER");
    console.error(error);
})