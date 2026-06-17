// Modules - Encapsulated Code (only share minimum)
// CommonJS, every file is a module (by default)

const sayHello = require('./utils/01-first-module.js');
const names = require('./utils/02-names');
const data = require('./alt');
require('./03-mindgrenade.js'); // when i import a module it's invoked automatically

console.log(data);
sayHello('Jeff');
sayHello(names.Anna);
