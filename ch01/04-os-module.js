// many useful properties and methods for interacting with the os and the server

const os = require('os');

// info about current user.
const user = os.userInfo();
console.log(user);

// methods returns the sys uptime in seconds.
console.log('uptime: ');
console.log(`System Uptime: ${os.uptime()}s`);

// currentOS
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOS);
