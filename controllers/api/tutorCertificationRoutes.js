const router = require('express').Router();
const { User, Certification, TutorCertification } = require('../../models');

// get all tutor_certification records
router.get('/', async (req, res) => {
    try {
       const tutorCertificationData =  await TutorCertification.findAll(
            {include: [{ all: true, nested: true }]}
        );
        res.status(200).json(tutorCertificationData);
    } catch (err) {res.status(500).json(err)}
});


// get tutor_certification table records by certification id
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
        res.status(500).json({ error: err.message }); }
});

// add records to the tutor_certification table
router.post('/', async(req, res) => {
    try{
        await TutorCertification.create({
            user_id: req.body.user_id,
            certification_id: req.body.certification_id,

        });
        res.status(200).json('A new certification has successfully added to your profile!')
    } catch (err) { res.status(500).json({err}); }
});

module.exports = router;