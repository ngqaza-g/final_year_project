const express = require('express');
const router = express.Router();
const admit_patient = require('../admit_patient_modules/admit_patient');
const get_health_care_workers = require('../admit_patient_modules/get_health_care-workers');

router.post('/admit', admit_patient);
router.get('/get_health_care_workers', get_health_care_workers);

module.exports = router;