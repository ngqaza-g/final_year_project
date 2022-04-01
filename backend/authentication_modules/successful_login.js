const get_reports = require('../patient_modules/get_reports');
const get_patients = require('../patient_modules/get_patients');

const successful_login = async (res, user, token = null) =>{
    const patients = await get_patients(user._id, user.role);

    const reports =  await Promise.all(patients.map(
        async (patient) =>{ 
            return await get_reports(patient._id);
    }));

    res.json({msg : "Logged in", user : user, login_token : token, patients : patients, reports : reports});
}

module.exports = successful_login;