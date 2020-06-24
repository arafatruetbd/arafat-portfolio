const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`The Server Has started on Port ${port}`);
});
