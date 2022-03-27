const User = require("../models/User")

const get_health_care_workers = async (req, res)=>{
    const users =  await User.find()
    const doctors = users 
                    .filter(user=> user.role.toLowerCase()  === "doctor")
                    .map(doctor =>(
                        {
                            id : doctor._id,
                            name: doctor.name
                        }
                    ));
    const nurses = users
                    .filter(user=> user.role.toLowerCase()  === "nurse")
                    .map(nurse =>(
                        {
                            id : nurse._id,
                            name: nurse.name
                        }
                    ));
    res.json({doctors : doctors, day_nurses : nurses, night_nurses : []});

}

module.exports = get_health_care_workers;