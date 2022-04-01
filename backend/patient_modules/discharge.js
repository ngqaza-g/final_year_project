const DischargePlan = require('../models/DischargePlan');
const Patient = require('../models/Patient');

const discharge = async (req, res)=>{
    const socket = req.app.get('socket');
    const { patient_id } = req.body;
    await Patient.deleteOne({_id : patient_id});
    socket.to(patient_id).emit('discharge_patient', patient_id);
    socket.to(patient_id).emit('notification', 'Patient Discharged');

    res.json({msg : 'Patient Discharged'});
}

module.exports = discharge;