const router = require('express').Router();
const { User } = require('../../models');

// api/tutors endpoints
// get all tutors
router.get('/:id', async (req, res) => {
    try {
        const tutorData = await User.findAll({
            where: { lesson_setting: req.params.id }
        });
        res.status(200).json(tutorData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
