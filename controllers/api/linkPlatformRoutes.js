const router = require('express').Router();
const { LinkPlatform } = require('../../models');

// api/linkPlatform endpoint

router.get('/', async (req, res) => {
    try {
        const linkPlatformData = await LinkPlatform.findAll({
            include: [{all: true}]
        });
        res.status(200).json((linkPlatformData));
    } catch (err) {res.status(422).json({ message: "Sorry, your request could not be processed due to the following error - " + err  })}
});

module.exports = router;