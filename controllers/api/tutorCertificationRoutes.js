const router = require('express').Router();
const { User, Certification, } = require('../../models');

router.get('/:id', async (req, res) => {
    try {
        const userMatch = await User.findAll({
            include: [{
                model: Certification,
                required: true,
                where: {
                    certification_name: req.params.id
                }
            }]
        });
        res.status(200).json(userMatch);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;