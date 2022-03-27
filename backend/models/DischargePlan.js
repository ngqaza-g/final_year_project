const mongoose = require('mongoose');

const dischargePlanSchema = mongoose.Schema({
    patient_id : String,
    author : String,
    discharge_therapy : String,
    date : String
});

const DischargePlan = mongoose.model('discharge_plan', dischargePlanSchema);

module.exports = DischargePlan;