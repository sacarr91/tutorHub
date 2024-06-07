const router = require('express').Router();
const { Tutor } = require('../../models');

// Middleware to parse JSON and URL-encoded data
const express = require('express');
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Create tutor
router.post('/', async (req, res) => {
  try {
    await Tutor.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      zipcode: req.body.zipcode,
      userRole: req.body.userRole,
      specialty: req.body.specialty,
      region: req.body.region,
      phone: req.body.phone,
      virtual: req.body.virtual,
      instruments: req.body.instruments,

    });
    res.status(200).json({ message: `${req.body.email} has been successfully registered to TutorHub!` });
  } catch (err) {
    res.status(422).json({ message: "Sorry, your request could not be processed due to the following error - " + err });
  }
});

module.exports = router;