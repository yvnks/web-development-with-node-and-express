// Asynchronous NODE JS features.
const http = require('node:http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/Home'.toLowerCase()) {
    res.end(`
      <p> Home page. </p>`);
  } else {
    // BLOCKING CODE.
    for (let i = 0; i < 50000; i++) {
      for (let j = 0; j < 50000; j++) {
        console.log(i, j);
      }
    }
    res.end(`
      <p> 404 - Page not found </p>
      `);
  }
});

server.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
