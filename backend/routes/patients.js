const express = require('express');
const router = express.Router();
const admit_patient = require('../patient_modules/admit_patient');
const get_health_care_workers = require('../patient_modules/get_health_care-workers');
const get_reports = require('../patient_modules/get_reports');
const get_treatments = require('../patient_modules/get_treatments');
const report = require('../patient_modules/report');
const treatment = require('../patient_modules/treatment');
const discharge = require('../patient_modules/discharge');

router.get('/get_health_care_workers', get_health_care_workers);
router.post('/admit', admit_patient);
router.post('/report', report);
router.post('/get_reports', get_reports);
router.post('/get_treatments', get_treatments);
router.post('/discharge', discharge);
router.post('/treatment', treatment);

module.exports = router;