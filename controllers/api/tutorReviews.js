const router = require('express').Router();
const { User, TutorReview, } = require('../../models');

router.get('/:id', async (req, res) => {
    try {
        const userMatch = await User.findAll({
            include: [{
                model: TutorReview,
                required: true,
                where: {
                    user_id: req.params.id
                }
            }]
        });
        res.status(200).json(userMatch);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;