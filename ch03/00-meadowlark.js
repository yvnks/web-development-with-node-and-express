const express = require('express');

const app = express();
// starter up
const PORT = process.env.PORT || 3000;

// Custom 404 Page;
app.use((req, res) => {
  res.type('text/html');
  res.status(404);
  res.send('404 - Not Found');
});

// Custome 500 Page;
app.use((err, req, res, next) => {
  console.log(err.message);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}` 
    + 'press Ctrl-C to terminate');
});
