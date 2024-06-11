const router = require('express').Router();
const userRoutes = require('./userRoutes');
const tutorRegistrationRoutes = require('./tutorRegistrationRoutes');
const tutorRoutes = require('./tutorRoutes');
const instrumentRoutes = require('./instrumentRoutes');
const specialtyRoutes = require('./specialtyRoutes');
const certificationRoutes = require('./certificationRoutes');
const tutorInstrument = require('./tutorInstrument');
const tutorCertification = require('./tutorCertification');
const tutorSpecialty = require('./tutorSpecialty');
const studentRegistrationRoutes = require('./studentRegistrationRoutes');


router.use('/users', userRoutes);
router.use('/tutorRegistration', tutorRegistrationRoutes);
router.use('/tutors', tutorRoutes);
router.use('/instruments', instrumentRoutes);
router.use('/tutorInstrument', tutorInstrument);
router.use('/certifications', certificationRoutes);
router.use('/specialty', specialtyRoutes);
router.use('/tutorCertification', tutorCertification);
router.use('/tutorSpecialty', tutorSpecialty);
router.use('/studentRegistration', studentRegistrationRoutes);

module.exports = router;
