const express = require('express');
const router = express.Router();
const admit_patient = require('../patient_modules/admit_patient');
const get_health_care_workers = require('../patient_modules/get_health_care-workers');

router.get('/get_health_care_workers', get_health_care_workers);
router.post('/admit', admit_patient);
router.post('/report');
router.post('/discharge');
router.post('/treatment');

module.exports = router;