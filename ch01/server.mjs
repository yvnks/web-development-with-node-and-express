import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';

const server = createServer();

server.on('request', (req, res) => {
  const src = createReadStream('./big-file.txt')
  src.pipe(res)
});

server.listen(3000, () => {
  console.log('Started server on port: 3000.\nPress Ctrl + C to cancel');
});
