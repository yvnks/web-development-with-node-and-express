const http = require('node:http');
const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html',
  });
  response.end(`
    <h1>
        Hello world
    </h1>
    <p>
        This is my first web server!
    </p>
    
    `);
});

server.listen(port, () => {
  console.log(
    `Server started on port ${port};` + 'Press Ctrl + C to terminate...',
  );
});
