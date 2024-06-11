const router = require('express').Router();
const { User, Instrument, } = require('../../models');

// router.get('/', async (req, res) => {
//     try {
//         const tutorData = await User.findAll(
//             { where: {'instruments.instrument_name': 'tuba'}, returning: true },
//             { include: [{all: true, nested: true }]},
//         );
//         res.status(200).json((tutorData));
//     } catch (err) {res.status(500).json(err);}
// });


router.get('/:id', async (req, res) => {
    try {
        const usersWithGuitar = await User.findAll({
            include: [{
                model: Instrument,
                required: true,
                where: {
                    id: req.params.id
                }
            }]
        });
        res.status(200).json(usersWithGuitar);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

