const TreatmentPlan = require('../models/TreatmentPlan');
const Patient = require('../models/Patient');

const get_treatments = async (req, res)=>{
    const { patient_id } = req.body; 
    const patient = await Patient.findOne({patient_id : patient_id});

    if(patient){
        const treatments = await TreatmentPlan.find({patient_id : patient_id});
        if(treatments.length > 0){
            res.json({msg: "treatments Found", reports : treatments});
        }else{
            res.status(404).json({msg: "No treatments Found", data : []});
        }
    }else{
        res.status(401).json({msg: "Patient not found"});
    }
}

module.exports = get_treatments;