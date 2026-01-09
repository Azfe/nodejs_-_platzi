var isNumber = require('is-number');

console.log(isNumber(5e3));               // true
console.log(isNumber(0xff));              // true
console.log(isNumber(-1.1));            // true
console.log(isNumber(Infinity));          // false
console.log(isNumber(NaN));               // false

