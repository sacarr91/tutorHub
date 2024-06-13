const router = require('express').Router();
const { User, Instrument, UserInstrument } = require('../../models');

// get all tutor_instrument records
router.get('/', async(req, res) => {
    try {
        const tutorInstrumentData = await UserInstrument.findAll(
            {include: [{ all: true, nested: true }]}
        )
    } catch (err) {res.status(500).json(err)}
});



// get tutor_instrument table records by instrument id
router.get('/:id', async (req, res) => {
    try {
        const users = await User.findAll({
            include: [{
                model: Instrument,
                required: true,
                where: {
                    instrument_name: req.params.id
                }
            }]
        });
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async(req, res) => {
    try {
        await UserInstrument.create({
        user_id: req.body.user_id,
        instrument_id: req.body.instrument_id,
        });
        res.status(200).json({ message: `a new instrument has been successfully added to your profile!` })
    } catch (err) {res.status(500).json(err)}
});

module.exports = router;

