// globals - no window

// __dirname - path to current directory
// __filename - file name
// require - function to use modules
// module - info about current module
// process - info about env where the program is being executed

const {john, peter} = require('./names');
const sayHi = require('./utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');

sayHi(peter);
sayHi(john)
console.log(data);

