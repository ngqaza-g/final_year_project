const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const socketio = require('socket.io');


const app = express();
const server = http.createServer(app);
let users = [];

const io = socketio(server, {
        cors:{
            origin : "http://localhost:3000"
        }
});

io.on('connection', socket=>{
    socket.on('user', user=>{
        users.push({
            socket_id : socket.id,
            user_id : user.user_id,
            role : user.role,
            token : user.token
        });
        console.log(users);
    })
    socket.on('join', room =>{
        socket.join(room);
        console.log(`Joined room ${room}`);
    });
});

io.on('disconnection', socket=>{
    users = users.filter(user =>(
        user.socket_id !== socket.id
    ));

    console.log(`User ${socket.id} disconnected`);
})

app.use(express.json());
app.set('socket', io);
global.socket = io;
app.set('users', users);
app.use(cors({
    origin : "http://localhost:3000"
}));




app.use('/', require('./routes/accounts'));
app.use('/patients/', require('./routes/patients'));

const PORT = 5000;

mongoose.connect('mongodb://localhost:27017/backend', {useNewUrlParser : true}).then(()=>{
    server.listen(PORT, ()=> console.log(`SERVER STARTED ON PORT ${PORT}`));
    require('./mqtt_client/mqtt_client');
}).catch((error)=>{
    console.log("FAILED TO START THE SERVER");
    console.error(error);
})