const router = require('express').Router();
const { User } = require('../../models');


router.get('/', async (req, res) => {
    try {
        const tutorData = await User.findAll(
            { where: {role_id : 1}, returning: true },
            { include: [{all: true, nested: true }]},
        );
        res.status(200).json((tutorData));
    } catch (err) {res.status(500).json(err);}
});


module.exports = router;

