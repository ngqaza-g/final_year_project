const NursingReport = require('../models/NursingReport');

const send_patient_info_on_entry = async (socket, patients)=>{
    console.log(socket);
    const patient_ids = patients.map(patient => patient._id);
    console.log(patient_ids);
    const reports = [];
    for(i = 0; i < patient_ids.length; i++){
        const patient_reports = await NursingReport.find({patient_id : patient_ids[i]});
        reports.push(patient_reports)
    }

    console.log(reports);
    
    socket.on('connection',()=>{
        socket.emit('patients', patients);
        socket.emit('reports', reports);
    })

}

module.exports = send_patient_info_on_entry;