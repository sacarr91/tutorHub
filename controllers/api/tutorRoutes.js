const router = require('express').Router();
const { User } = require('../../models');

// api/tutors endpoints
// get all tutors
router.get('/', async (req, res) => {
    try {
        const tutorData = await User.findAll({
            where: { role_id: 1 },
            include: [{ all: true, nested: true }]
        });
        res.status(200).json(tutorData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get tutor by instrument id
router.get('/:instrumentId', async (req, res) => {
    const instrumentId = req.params.instrumentId;

    try {
        const tutorData = await User.findAll({
            where: { 
                role_id: 1,
                '$instruments.id$': instrumentId
            },
            include: [{ all: true, nested: true }]
        });
        res.status(200).json(tutorData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;

