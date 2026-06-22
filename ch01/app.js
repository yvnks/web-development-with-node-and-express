const { readFile, writeFile } = require('fs').promises;
const util = require('util');

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// async
const start = async () => {
  try {
    const first = await readFile('./content/content-notes.txt', 'utf-8');
    const second = await readFile('./content/result-async.txt', 'utf-8');
    await writeFile(
      './content/mind-grenade.txt',
      `THIS IS AWESOME \n${first}\n${second}.\n append to file.`,
      { flag: 'a' },
    );
    console.log(first, second); // wait for promise to be resolved;
  } catch (error) {
    console.log(error);
  }
};

start();

// const getText = (path) =>
//   new Promise((resolve, reject) => {
//     readFile(path, 'utf-8', (error, data) => {
//       if (error) {
//         reject(error);
//       } else {
//         for (let i = 0; i < 1000; i++) {
//           console.log(i);
//         }
//         resolve(data);
//       }
//     });
//   });

// getText('./content/content-notes.txt')
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((value) => {
//     console.log(value);
//   });
