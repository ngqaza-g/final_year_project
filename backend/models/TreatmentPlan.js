const mongoose = require('mongoose');

const treatmentPlanSchema = mongoose.Schema({
    patient_id : String,
    author : String,
    case_history : String,
    prescription: String,
    date : String
});

const TreatmentPlan = mongoose.model('treatment_plan', treatmentPlanSchema);

module.exports = TreatmentPlan;