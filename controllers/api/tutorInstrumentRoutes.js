const router = require('express').Router();
const { User, Instrument, UserInstrument } = require('../../models');

// get all tutor_instrument records
router.get('/', async(req, res) => {
    try {
       const tutorInstrumentData = await UserInstrument.findAll(
            {include: [{ all: true, nested: true }]}
        );
        res.status(200).json((tutorInstrumentData));
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

// add records to the user_instrument table
router.post('/', async(req, res) => {
    try {
        await UserInstrument.create({
        user_id: req.body.user_id,
        instrument_id: req.body.instrument_id,
        });
        res.status(200).json({ message: `a new instrument has been successfully added to your profile!` })
    } catch (err) {res.status(422).json({err});}
});

//  remove records from the user_instrument table
router.delete('/:user_id/:instrument_id', async (req, res) => {

    try {
        const deletedInstrument = await UserInstrument.destroy({
            where: {
                user_id: req.params.user_id,
                instrument_id: req.params.instrument_id,
            }
        });
        if (deletedInstrument === 0) {
            return res.status(404).json({ message: "Sorry, there are no records of this instrument associated with your user" });
        }
        return res.status(200).json({ message: "Record deleted successfully" });
    } catch (err) {
        res.status(422).json({ message: "Sorry, your request could not be processed due to the following error - " + err });
    }
});
module.exports = router;

