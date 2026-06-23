import { createServer } from 'node:http';
const PORT = process.env.PORT || 3000;

// Use EventEmiiter to create a server.
const server = http.createServer();

server.on('request', (request, response) => {
  // Listen for a request event
  response.end('<p>200 OK!</p>');
});

server.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}` + '\nPress Ctrl + C to cancel');
});
