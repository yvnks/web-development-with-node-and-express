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

// Custome 500 Page;
app.use((err, req, res, next) => {
  console.log(err.message);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
});

// Add routes to
app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Meadowlark Travel');
});

app.get('/about', (req, res) => {
  res.type('text/plain');
  res.send('About Meadowlark Travel.');
});

// Custom 404 Page
app.use((req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Page not found');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}` + 'press Ctrl-C to terminate');
});
