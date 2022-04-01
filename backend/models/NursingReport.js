const mongoose = require('mongoose');

const nursingReportSchema = mongoose.Schema({
    patient_id : String,
    author : String,
    bp: String,
    spo2: String,
    temp : String,
    heart_rate: String,
    nursing_care_plan : String,
    nursing_report: String,
    date : String
});

const NursingReport = mongoose.model('nursing_report', nursingReportSchema);

module.exports = NursingReport;