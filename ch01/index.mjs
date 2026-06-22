import { server } from './server.mjs';

server.listen(3000, () => {
  console.log('Started server on port: 3000.\nPress Ctrl + C to cancel');
});
