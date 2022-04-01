const moment = require('moment');
const NursingReport = require('../models/NursingReport');
const Patient = require('../models/Patient'); 
const get_reports = require('./get_reports');

const report = async (req, res)=>{
    const socket = req.app.get('socket');
    const report  = req.body;
    const {patient_id} = report;
    const patient = Patient.findOne({_id: patient_id});
    if(patient){
            const new_nursing_report = new NursingReport({...report, date: moment().format('LLL')});
            await new_nursing_report.save();
            const reports = await get_reports(patient_id);
            socket.to(patient_id).emit('reports', reports);
            socket.to(patient_id).emit('notification', 'New Nursing Report');
            res.json({msg: "Report Saved"});
    }else{
        res.status(404).json({msg: "Patient with that id not found"});
    }
}

module.exports = report;