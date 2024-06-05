// code to handle add new user
const router = require('express').Router();
const { User } = require('../../models');
// create user
router.post('/', async (req, res) => {
    
    try {
        await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            zipcode: req.body.zipcode,
            userRole: req.body.userRole
        });
        res.status(200).json({message: `${req.body.email} has been successfully registered to TutorHub!`})
    } catch (err) {
        res.status(422).json({message: "Sorry, your request could not be processed due to the following error - " + err});
    }
})

module.exports = router;