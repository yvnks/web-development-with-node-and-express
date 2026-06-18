const http = require('node:http');
const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  const path = request.url.toLowerCase();
  console.log(path);

  if (path === '') {
    response.writeHead(200, {
      'Content-Type': 'text/html',
    });
    response.end(`
        <p>Homepage</p>
        `);
  } else if (path === '/about') {
    response.writeHead(200, {
      'Content-Type': 'text/html',
    });
    response.end(`
        <p>
            About Page.
        </p>
        `);
  } else if (path === '/') {
    response.writeHead(200, {
      'Content-Type': 'text/html',
    });
    response.end(`
        <h3>
            Home Page
        </h3>
        `);
  } else {
    response.writeHead(404, {
      'Content-Type': 'text/html',
    });
    response.end(`
        <h3>
            404 Page not found.
        </h3>
        `);
  }
});

server.listen(port, () => {
  console.log(
    `Server started on port ${port};` + 'Press Ctrl + C to terminate...',
  );
});
