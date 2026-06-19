const express = require('express');
const expressHandlebars = require('express-handlebars');

const app = express();

app.engine(
  'handlebars',
  expressHandlebars({
    defaultLayout: 'main',
  }),
);

app.set('view engine', 'handlebars');

const PORT = process.env.PORT || 3000;

app.get('/home', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about');
});

// Custom 404 Page.
app.use((req, res) => {
  res.status(404);
  res.render('404');
});

// Custome 500 Page
app.use((req, res) => {
  res.status(500);
  res.render('500');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}` + 'press Ctrl-C to terminate');
});
