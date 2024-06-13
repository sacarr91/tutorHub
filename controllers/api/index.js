const router = require('express').Router();
const userRoutes = require('./userRoutes');
const tutorRegistrationRoutes = require('./tutorRegistrationRoutes');
const tutorRoutes = require('./tutorRoutes');
const instrumentRoutes = require('./instrumentRoutes');
const specialtyRoutes = require('./specialtyRoutes');
const certificationRoutes = require('./certificationRoutes');
const tutorInstrument = require('./tutorInstrumentRoutes');
const tutorCertification = require('./tutorCertificationRoutes');
const tutorSpecialty = require('./tutorSpecialtyRoutes');
const studentRegistrationRoutes = require('./studentRegistrationRoutes');
const tutorLinkRoutes = require('./tutorLinkRoutes');


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
router.use('/tutorLink', tutorLinkRoutes);

module.exports = router;
