const router = require('express').Router();
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
