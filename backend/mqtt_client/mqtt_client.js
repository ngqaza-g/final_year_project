const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://localhost');

client.on('connect', ()=>{
    console.log('Connected to mqtt');
    client.subscribe('spo2', (err)=>{
        if(!err){
            console.log('Subscribed');
        }
    });
});

client.on('message', (topic, message)=>{
    console.log(topic);
    if(topic === 'spo2'){
        try{
            data = JSON.parse(message.toString());
            console.log(data);
            socket.emit('vitals', data);
        }catch{
            console.log("Invalid data recieved");
        }
    }
})