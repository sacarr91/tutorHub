const router = require('express').Router();
const userRoutes = require('./userRoutes');
const registrationRoutes = require('./registrationRoutes');
const tutorRegistrationRoutes = require('./tutorRegistrationRoutes');

router.use('/users', userRoutes);
router.use('/registration', registrationRoutes);
router.use('/tutorRegistration', tutorRegistrationRoutes);

module.exports = router;
