const NursingReport = require('../models/NursingReport');
const TreatmentPlan = require('../models/TreatmentPlan');

const get_reports = async (patient_id)=>{
        const nursing_reports = await NursingReport.find({patient_id : patient_id})
        const treatments = await TreatmentPlan.find({patient_id : patient_id});
        
        const reports = {
            patient_id,
            nursing_reports,
            treatments
        }

        return reports;
}

module.exports = get_reports;