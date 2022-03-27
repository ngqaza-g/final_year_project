const NursingReport = require('../models/NursingReport');


const report = async (req, res)=>{
    const {patient_id, request_type, data} = req.body;
    conat patient = Patient.findeOne({_id: patient_id});
    if(patient){
        if(request_type === "write"){
            const report = {patient_id : patient_id, ...data};
            const new_nursing_report = new NursingReport(report);
    
            await new_nursing_report.save();
            res.json({msg: "Report Saved"})
        }
        else if(request_type === "read"){
            const reports = NursingReport.find({patient_id : patient_id});
            if(reports.length > 0){
                res.json({msg: "Reports Found", reports : reports});
            }else{
                res.json({msg: "No Reports Found"});
            }
        }else{
            res.status(404).json({msg: "Invalid request type"});
        }
    }else{
        res.status(404).json({msg: "Patient with that id not found"});
    }
}

module.exports = report;