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
            platform_id: req.body.platform_id,
            link: req.body.link,
        });
        res.status(200).json({message: `a new link has been added to your profile!`})
    }catch(err){res.status(422).json(err);}
});

// remove records from the tutor_link table
router.delete('/:user_id/:platform_id', async (req, res) => {

    try {
        const deletedLink = await TutorLink.destroy({
            where: {
                user_id: req.params.user_id,
                platform_id: req.params.platform_id,
            }
        });
        if (deletedLink === 0) {
            return res.status(404).json({ message: "Sorry, there are no records of this instrument associated with your user" });
        }
        return res.status(200).json({ message: "Record deleted successfully" });
    } catch (err) {
        res.status(422).json({ message: "Sorry, your request could not be processed due to the following error - " + err });
    }
});

module.exports = router;

