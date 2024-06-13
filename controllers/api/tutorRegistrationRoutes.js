const router = require('express').Router();
const { User, UserInstrument, TutorCertification, TutorSpecialty, TutorLink } = require('../../models');

// Middleware to parse JSON and URL-encoded data
const express = require('express');
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Create tutor
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({
      salutation: req.body.salutation,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      profile_img: req.body.profile_img,
      role_id: 1,
      price: req.body.price,
      lesson_setting: req.body.lesson_setting,
      zipcode: req.body.zipcode,
      phone: req.body.phone,
    });

    // add tutor's instruments to user_instrument table only if an instrument is selected
    if (req.body.instrument_id) {
      const instrumentIds = Array.isArray(req.body.instrument_id) ? req.body.instrument_id : [req.body.instrument_id];

      const userInstrumentPromises = instrumentIds.map(instrumentId => {
        return UserInstrument.create({
          user_id: newUser.id,
          instrument_id: instrumentId
        });
      });
  
      await Promise.all(userInstrumentPromises);
    }

    // add tutor's certs to tutor_certification table only if certification is selected
    if (req.body.certification_id) {
      const certificationIds = Array.isArray(req.body.certification_id) ? req.body.certification_id : [req.body.certification_id];

      const tutorCertificationPromises = certificationIds.map(certificationId => {
        return TutorCertification.create({
          user_id: newUser.id,
          certification_id: certificationId
        });
      });
  
      await Promise.all(tutorCertificationPromises);
    }
    

    // add tutor's specialty to tutor_specialty table only if specialty is selected
    if(req.body.specialty_id) {
      const specialtyIds = Array.isArray(req.body.specialty_id) ? req.body.specialty_id : [req.body.specialty_id];

      const tutorSpecialtyPromises = specialtyIds.map(specialtyId => {
        return TutorSpecialty.create({
          user_id: newUser.id,
          specialty_id: specialtyId
        });
      });
  
      await Promise.all(tutorSpecialtyPromises);
    }

    // add tutor's link to tutor_link table only if link is provided
    if(req.body.link) {
      const tutorLinks = Array.isArray(req.body.link) ? req.body.link : [req.body.link];
      const linkPlatform = req.body.platform;

      const tutorLinkPromises = tutorLinks.map(tutorLink => {
        return TutorLink.create({
          user_id: newUser.id,
          link: tutorLink,
          platform: linkPlatform
        });
      });
      await Promise.all(tutorLinkPromises);
    }

 // Set session details for the logged-in user
 req.session.save(() => {
  req.session.user_id = newUser.id;
  req.session.logged_in = true;

  // Redirect to index.html after successful registration and login
  res.redirect('/index.html');
});
} catch (err) {
res.status(422).json({ message: "Sorry, your request could not be processed due to the following error - " + err });
}
});

module.exports = router;