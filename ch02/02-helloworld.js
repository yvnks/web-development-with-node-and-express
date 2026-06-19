// Start up code.

const http = require('node:http');
const fs = require('node:fs');
const PORT = process.env.PORT || 3000;

function serveStaticFile(response, path, contentType, responseCode = 200) {
  fs.readFile(__dirname + path, (error, data) => {
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/html' });
      return response.end('500 - Internal Error');
    }

    // If there's no error;
    response.writeHead(responseCode, { 'Content-Type': contentType });
    response.end(data);
  });
}

// Create server
const server = http.createServer((req, res) => {
  const path = req.url;

  // Check path
  if (path === '/') {
    serveStaticFile(res, '/public/index.html', 'text/html');
  } else if (path === '/about') {
    serveStaticFile(res, '/public/about.html', 'text/html');
  } else if (path === '/img/logo.png') {
    serveStaticFile(res, '/public/images/logo.png', 'image/png');
  } else {
    serveStaticFile(res, '/public/404.html', 'text/html', 404);
  }
});

server.listen(PORT, () => {
  console.log(`server started on port ${PORT}; ` + 'Press Ctrl + c to cancel');
});
