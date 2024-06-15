const router = require('express').Router();
const { Instrument } = require('../../models');

// api/instrument endpoint
router.get('/', async (req, res) => {
    try {
        const instrumentData = await Instrument.findAll({
            include: [{all: true }]
        });
        res.status(200).json((instrumentData));
    } catch (err) {res.status(422).json({ message: "Sorry, your request could not be processed due to the following error - " + err });}
});

module.exports = router;