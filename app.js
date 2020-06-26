const express = require('express');
const expressSanitizer = require('express-sanitizer');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const clientRoutes = require('./routes/clientRoutes');
const flash = require('connect-flash');
const app = express();

const url = process.env.MonGODB_URL || 'mongodb://localhost/Portfolio';

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.static('public'));
app.use(expressSanitizer());
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());

app.use(
  require('express-session')({
    cookie: { maxAge: 5000 },
    secret: 'Hard Work is Everything',
    resave: false,
    saveUninitialized: true,
  })
);

app.use(function (req, res, next) {
  res.locals.error = req.flash('error');
  res.locals.success = req.flash('success');
  next();
});

app.use('/', clientRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`The Server Has started on Port ${port}`);
});
