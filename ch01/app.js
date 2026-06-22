const { readFile, read } = require('fs');

const getText = (path) =>
  new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });

getText('./content/content-notes.txt')
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value);
  });
