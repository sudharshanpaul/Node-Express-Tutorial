// Modules
// CommonJS, every file module (bu default)
// Moduless - Encapsulated code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative_flavour')
require('./7-mind-grenade')
console.log(names)
console.log(data)
sayHi('Paul');
sayHi(names.john);
sayHi(names.peter);

