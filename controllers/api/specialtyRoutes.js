const router = require('express').Router();
const { Specialty } = require('../../models');

// api/certification endpoint
router.get('/', async (req, res) => {
    try {
        const specialtyData = await Specialty.findAll({
            include: [{all: true }]
        });
        res.status(200).json((specialtyData));
    } catch (err) {res.status(500).json(err);}
});

module.exports = router;