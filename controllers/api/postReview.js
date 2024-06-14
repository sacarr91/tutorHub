const router = require('express').Router();
const { TutorReview } = require('../../models');

// Middleware to parse JSON and URL-encoded data
const express = require('express');
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Create review
router.post('/', async (req, res) => {
  try {
    await TutorReview.create({
      user_id: req.body.user_id,
      student_email: req.body.student_email,
      review: req.body.review,
      rating: req.body.rating,
    });
    res.redirect('/tutordave.html');
  } catch (err) {
    res.status(422).json({ message: "Sorry, your request could not be processed due to the following error - " + err });
  }
});

module.exports = router;