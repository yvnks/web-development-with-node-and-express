const { readFileSync, writeFileSync, write } = require('fs');

const file = readFileSync('./content/content-notes.txt', 'utf-8');
const file1 = readFileSync('./content/subfolder/notes.txt', 'utf-8');

writeFileSync(
  './content/result-sync.txt',
  `This is the results: ${file}, ${file1}`,
  // { flag: 'a' }, 
);
console.log(file, file1);
