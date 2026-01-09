const dateFormatter = require('platzi_date');

console.log('Timestamp:', dateFormatter.getTimestamp());
console.log('Long Time:', dateFormatter.getLongTime());

console.log('Fecha en español:', dateFormatter.getLongTime());
console.log('Date in English:', dateFormatter.getLongTime('en-US'));