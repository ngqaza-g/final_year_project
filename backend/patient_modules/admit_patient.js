const Patient = require('../models/Patient');

const admit_patient = async (req, res)=>{
    const socket = req.app.get('socket');
    const users = req.app.get('users');
    const {
        name,
        national_id,
        age,
        address,
        phone_number,
        gender,
        next_of_kin,
        case_description,    
        care_givers ,
    } = req.body;

    const patient = await Patient.findOne({national_id : national_id});
    if(!patient){
        const newPatient = new Patient({
            name : name,
            age : age,
            national_id: national_id,
            address : address,
            phone_number : phone_number,
            gender : gender,
            next_of_kin : next_of_kin,
            case_description : case_description,
            care_givers : care_givers
        });
    
        await newPatient.save();
        const newPatientData = await Patient.findOne({national_id : national_id}).select({
            name : 1, 
            gender: 1,
            age: 1
        });

        users.forEach(user=>{
            const { doctor, day_nurse, night_nurse} = care_givers;
            if(user.user_id === doctor || user.user_id === day_nurse || user.user_id === night_nurse || user.role.toLowerCase() === 'admin'){
                socket.to(user.socket_id).emit('notification', 'Patient Admited');
                socket.to(user.socket_id).emit('admit_patient', newPatientData);
            }
        })
        res.json({msg: "Patient Admited"});

    }else{
        res.status(401).json({msg: `Patient with national_id ${national_id} is already admitted`});
    }

}

module.exports = admit_patient;