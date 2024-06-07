const router = require('express').Router();
const userRoutes = require('./userRoutes');
const registrationRoutes = require('./registrationRoutes');
const tutorRegistrationRoutes = require('./tutorRegistrationRoutes');
const tutorRoutes = require('./tutorRoutes');


router.use('/users', userRoutes);
router.use('/registration', registrationRoutes);
router.use('/tutorRegistration', tutorRegistrationRoutes);
router.use('/tutors', tutorRoutes);

module.exports = router;
