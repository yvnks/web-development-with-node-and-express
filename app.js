const { createReadStream } = require('node:fs');

const stream = createReadStream('../ch01/big-file.txt', {
  highWaterMark: 90000,
  encoding: 'utf8',
});

stream.on('data', (result) => {
  console.log(result);
});

stream.on('error', (error) => {
    console.log(error)
});
