const router = require('express').Router();
const { User, Instrument, } = require('../../models');

router.get('/:id', async (req, res) => {
    try {
        const usersWithGuitar = await User.findAll({
            include: [{
                model: Instrument,
                required: true,
                where: {
                    instrument_name: req.params.id
                }
            }]
        });
        res.status(200).json(usersWithGuitar);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

