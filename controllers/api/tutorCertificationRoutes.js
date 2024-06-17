const router = require("express").Router();
const { User, Certification, TutorCertification } = require("../../models");

// get all tutor_certification records
router.get("/", async (req, res) => {
  try {
    const tutorCertificationData = await TutorCertification.findAll({
      include: [{ all: true, nested: true }],
    });
    res.status(200).json(tutorCertificationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get tutor_certification table records by certification id
router.get("/:id", async (req, res) => {
  try {
    const userMatch = await User.findAll({
      include: [
        {
          model: Certification,
          required: true,
          where: {
            certification_name: req.params.id,
          },
        },
      ],
    });
    res.status(200).json(userMatch);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// add records to the tutor_certification table
router.post("/", async (req, res) => {
  try {
    await TutorCertification.create({
      user_id: req.body.user_id,
      certification_id: req.body.certification_id,
    });
    res
      .status(200)
      .json("A new certification has successfully added to your profile!");
  } catch (err) {
    res.status(422).json({ err });
  }
});

// remove records from the tutor_certification table
router.delete("/:user_id/:certification_id", async (req, res) => {
  try {
    const deletedCertification = await TutorCertification.destroy({
      where: {
        user_id: req.params.user_id,
        certification_id: req.params.certification_id,
      },
    });
    if (deletedCertification === 0) {
      return res
        .status(404)
        .json({
          message:
            "Sorry, there are no records of this certification associated with your user",
        });
    }
    return res.status(200).json({ message: "Record deleted successfully" });
  } catch (err) {
    res
      .status(422)
      .json({
        message:
          "Sorry, your request could not be processed due to the following error - " +
          err,
      });
  }
});
module.exports = router;
