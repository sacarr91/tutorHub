const router = require('express').Router();
const { DataTypes } = require('sequelize');
const { User } = require('../../models');

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
  const [ rowsAffected, [updatedUser]] = await User.update(
    {
      salutation: req.body.salutation,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      profile_img: req.body.profile_img,
      price: req.body.price,
      lesson_setting: req.body.lesson_setting,
      phone: req.body.phone,
    },
    { where: {id: req.params.id}, returning: true }
  )
  if (rowsAffected === 0) {
    return res.status(422).json({message: 'Sorry, something went wrong, please ensure that you are logged in, refresh the page and try again'})
  }
  res.status(200).json({message: "You have successfully updated your profile details!"})
} 
catch(err){res.status(422).json({message: "Sorry, your request could not be proceessed at this time due to the following error" + err})}
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
      
      res.redirect('/index.html');
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
