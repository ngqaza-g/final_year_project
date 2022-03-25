const express = require('express');
const Patient = require('../models/Patient');
const router = express.Router();

const admit_patient = async (req, res)=>{
    const {
        name,
        national_id,
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
            national_id: national_id,
            address : address,
            phone_number : phone_number,
            gender : gender,
            next_of_kin : next_of_kin,
            case_description : case_description,
            care_givers : care_givers
        });
    
        await newPatient.save();
        res.json({msg: "Patient Admited"});

    }else{
        res.status(401).json({msg: `Patient with national_id ${national_id} is already admitted`});
    }

}

router.post('/admit', admit_patient);

module.exports = router;