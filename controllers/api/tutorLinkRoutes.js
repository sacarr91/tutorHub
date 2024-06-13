const router = require('express').Router();
const { TutorLink } = require('../../models');

// get all tutor_link records
router.get('/', async(req, res) =>{
    try {
        const tutorLinkData = await TutorLink.findAll(
            {include: [{all: true, nested:true}]}
        );
        res.status(200).json((tutorLinkData))
    } catch(err){res.status(500).json(err);}
});

// add records to the tutor_link table
router.post('/', async(req, res) => {
    try{
        await TutorLink.create({
            user_id: req.body.user_id,
            platform: req.body.platform,
            link: req.body.link,
        });
        res.status(200).json({message: `a new link has been added to your profile!`})
    }catch(err){res.status(500).json(err);}
});

module.exports = router;

