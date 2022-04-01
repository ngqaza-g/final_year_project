const Patient = require('../models/Patient');

const get_patients = async (id, role) =>{
    const filter = role.toLowerCase() === 'admin' ? {} : {$or : [
        {'care_givers.doctor' : id},
        {'care_givers.day_nurse' : id},
        {'care_givers.night_nurse' : id}
    ]}

    const patients = await Patient.find(filter).select({
        name : 1, 
        gender: 1,
        age: 1
    });

    return patients
}


module.exports = get_patients;