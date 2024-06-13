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
      student_id: req.body.student_id,
      review: req.body.review,
    });
    res.redirect('/tutordave.html');
  } catch (err) {
    res.status(422).json({ message: "Sorry, your request could not be processed due to the following error - " + err });
  }
});

module.exports = router;