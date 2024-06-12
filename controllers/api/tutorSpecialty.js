const router = require('express').Router();
const { User, Specialty, } = require('../../models');

router.get('/:id', async (req, res) => {
    try {
        const userMatch = await User.findAll({
            include: [{
                model: Specialty,
                required: true,
                where: {
                    specialty_name: req.params.id
                }
            }]
        });
        res.status(200).json(userMatch);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;