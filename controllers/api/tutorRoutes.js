const router = require('express').Router();
const { Tutor } = require('../../models');

// api/tutors endpoint
router.get('/', async (req, res) => {
    try {
        const tutorData = await Tutor.findAll({
            include: [{all: true }]
        });
        res.status(200).json((tutorData));
    } catch (err) {res.status(500).json(err);}
});

module.exports = router;