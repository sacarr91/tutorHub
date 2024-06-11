const router = require('express').Router();
const userRoutes = require('./userRoutes');
const tutorRegistrationRoutes = require('./tutorRegistrationRoutes');
const tutorRoutes = require('./tutorRoutes');
const instrumentRoutes = require('./instrumentRoutes');


router.use('/users', userRoutes);
router.use('/tutorRegistration', tutorRegistrationRoutes);
router.use('/tutors', tutorRoutes);
router.use('/instruments', instrumentRoutes);

module.exports = router;
