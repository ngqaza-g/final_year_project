const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    name : String,
    national_id: String,
    address: String,
    phone_number: String,
    gender : String,

    next_of_kin: {
        name : String,
        address: String,
        phone_number: String,
        national_id : String
    },

    case_description: {
        bp: String,
        spo2: String,
        temperature: String,
        case_description: String
    },

    care_givers: {
        doctor: String,
        day_nurse: String,
        night_nurse: String
    }
});

const Patient = mongoose.model('patient', patientSchema);

module.exports = Patient;