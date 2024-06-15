const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');

// code to handle retrieve user by id
router.get('/:id', async (req, res) => {
  try{
    const userData = await User.findOne(
      {where: {id: req.params.id }, returning: true},
      {include: [{ all: true, nested: true }]}
    );
    res.status(200).json(userData);
  } catch (err) {res.status(500).json(err);}
});

// code to handle retrieve user by email
router.get('/email/:email', async (req, res) => {
  try {
      const userData = await User.findOne({
          where: { email: req.params.email },
          include: [{ all: true, nested: true }]
      });
      res.status(200).json(userData);
  } catch (err) {
      res.status(500).json(err);
  }
});

// code to handle update user info
router.put('/:id', async (req, res) => {
  try {
    const userData = {
      salutation: req.body.salutation,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      profile_img: req.body.profile_img,
      price: req.body.price,
      lesson_setting: req.body.lesson_setting,
      phone: req.body.phone,
      zipcode: req.body.zipcode,
    };

    if (req.body.password) {

      if (req.body.password.length < 8) {
        return res.status(422).json({ message: 'Password must be at least 8 characters long' });
      }

      userData.password = req.body.password;
    }

    const [rowsAffected] = await User.update(userData, {
      where: { id: req.params.id },
      returning: true,
      individualHooks: true,
      validate: true,
    });

    if (rowsAffected === 0) {
      return res.status(422).json({ message: 'Sorry, something went wrong, please ensure that you are logged in, refresh the page and try again' });
    }

    res.status(200).json({ message: "You have successfully updated your profile details!" });
  } catch (err) {
    res.status(422).json({ message: "Sorry, your request could not be processed at this time due to the following error: " + err });
  }
});

// code to handle login and logout 
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.redirect('/tutordave.html');
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
