const moment = require('moment');
const Patient = require('../models/Patient'); 
const TreatmentPlan = require('../models/TreatmentPlan');
const get_reports = require('./get_reports');

const treatment = async (req, res)=>{
    const socket = req.app.get('socket');
    const report  = req.body;
    const {patient_id} = report;
    const patient = Patient.findOne({_id: patient_id});
    if(patient){
        const new_treament_plan = new TreatmentPlan({...report, date :  moment().format('LLL')});
        await new_treament_plan.save();
        const reports = await get_reports(patient_id);
        socket.emit('reports', reports);
        socket.emit('notification', 'New Treatment Plan');
        res.json({msg: "Treatment Plan Saved"});
    }else{
        res.status(404).json({msg: "Patient with that id not found"});
    }
}

module.exports = treatment;