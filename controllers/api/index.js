const router = require('express').Router();
const userRoutes = require('./userRoutes');
const registrationRoutes = require('./registrationRoutes+');

router.use('/users', userRoutes);
router.use('/registration', registrationRoutes);

module.exports = router;
