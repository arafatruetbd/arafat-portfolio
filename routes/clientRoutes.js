const router = require('express').Router();
const Portfolio = require('../models/client');

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const description = req.body.description;

  const newUser = { name, email, description };

  Portfolio.create(newUser, (err, newlyCreated) => {
    if (err) {
      console.log(err);
      req.flash('error', 'Please Check Your Form');
      res.redirect('/');
    } else {
      req.flash('success', 'Message Sent Successfully');
      res.redirect('/');
    }
  });
});

module.exports = router;
