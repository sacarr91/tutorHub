const router = require('express').Router();
const { Certification } = require('../../models');

// api/certification endpoint
router.get('/', async (req, res) => {
    try {
        const certificationData = await Certification.findAll({
            include: [{all: true }]
        });
        res.status(200).json((certificationData));
    } catch (err) {res.status(500).json(err);}
});

module.exports = router;