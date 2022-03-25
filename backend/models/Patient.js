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
        phone_number: String
    },

    case_description: {
        bp: String,
        spo2: String,
        temperature: String,
        description: String
    },

    care_givers: {
        doctor: String,
        nurses: {
            senior_nurses : String,
            nurse_day: String,
            nurse_night: String
        }
    }
});

const Patient = mongoose.model('patient', patientSchema);

module.exports = Patient;