const { readFile, writeFile } = require('fs');
// const { readFileSync, writeFileSync, write } = require('fs');

/** 
const file = readFileSync('./content/content-notes.txt', 'utf-8');
const file1 = readFileSync('./content/subfolder/notes.txt', 'utf-8');

writeFileSync(
  './content/result-sync.txt',
  `This is the results: ${file}, ${file1}`,
  // { flag: 'a' },
);
console.log(file, file1);
*/

// Asynchronous codes require callbacks because the perfom some function and take a
// little bit of time

readFile('./content/content-notes.txt', 'utf-8', (error, result) => {
  if (error) {
    return;
  }
  const first = result;
  readFile('./content/subfolder/notes.txt', 'utf-8', (error, result) => {
    if (error) {
      return;
    }
    const second = result;
    writeFile(
      './content/result-async.txt',
      `Here are the results: ${first} ${second}`,
      (error, result) => {
        console.log(error);
      },
    );
  });
  // returns a buffer if we don't provide the encoding type
  console.log(result);
});
