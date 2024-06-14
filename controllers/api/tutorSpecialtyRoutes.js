const router = require("express").Router();
const { User, Specialty, TutorSpecialty } = require("../../models");

// get all
router.get("/", async (req, res) => {
  try {
    const tutorSpecialtyData = await TutorSpecialty.findAll({
      include: [{ all: true, nested: true }],
    });
    res.status(200).json(tutorSpecialtyData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get tutor_specialty by specialty id
router.get("/:id", async (req, res) => {
  try {
    const userMatch = await User.findAll({
      include: [
        {
          model: Specialty,
          required: true,
          where: {
            specialty_name: req.params.id,
          },
        },
      ],
    });
    res.status(200).json(userMatch);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// add records to the tutor_specialty table
router.post("/", async (req, res) => {
  try {
    await TutorSpecialty.create({
      user_id: req.body.user_id,
      specialty_id: req.body.specialty_id,
    });
    res
      .status(200)
      .json({ message: `a new specialty has been added to your profile!` });
  } catch (err) {
    res.status(500).json(err);
  }
});
//  remove records from the user_specialty table
router.delete("/:user_id/:specialty_id", async (req, res) => {
  try {
    const deletedSpecialty = await TutorSpecialty.destroy({
      where: {
        user_id: req.params.user_id,
        specialty_id: req.params.specialty_id,
      },
    });
    if (deletedSpecialty === 0) {
      return res.status(404).json({
        message:
          "Sorry, there are no records of this specialty associated with your user",
      });
    }
    return res.status(200).json({ message: "Record deleted successfully" });
  } catch (err) {
    res.status(422).json({
      message:
        "Sorry, your request could not be processed due to the following error - " +
        err,
    });
  }
});
module.exports = router;
