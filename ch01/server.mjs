import { createServer } from 'node:http';

// Use named exports
export const server = createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
  });
  res.end(`<p>Hello world </p>`);
});
