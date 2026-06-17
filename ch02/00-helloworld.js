const http = require('node:http');
const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  response.end('Hello world!');
});

server.listen(port, () => {
  console.log(`Server started on port ${port};` +
    'Press Ctrl + C to terminate...'
  );
});
