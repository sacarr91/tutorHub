const router = require('express').Router();
const { User } = require('../../models');

// Middleware to parse JSON and URL-encoded data
const express = require('express');
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Create tutor
router.post('/', async (req, res) => {
  try {
    await User.create({
      salutation: req.body.salutation,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      profile_img: req.body.profile_img,
      role_id: 2,
    });
    res.status(200).json({ message: `${req.body.email} has been successfully registered to TutorHub!` });
  } catch (err) {
    res.status(422).json({ message: "Sorry, your request could not be processed due to the following error - " + err });
  }
});

module.exports = router;