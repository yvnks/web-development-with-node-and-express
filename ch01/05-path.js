const path = require('path');

// Returns a platform specific separator.
console.log(path.sep);

// Path.join - Joins a sequence of path segments using platform specific separator.
const filePath = path.join('/content', 'subfolder', 'notes.txt');
console.log(filePath);

// base name
const base = path.basename(filePath);
console.log(base);

// Path.resolve() returns an absolute path. - Accepts a sequence of paths & resolves it into an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'notes.txt');
console.log(absolute);
console.log(__dirname);
