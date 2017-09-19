const River = require('./index');


const river = new River();

river.onValue((value) => value * 2);

river.push(4)
river.push([6,7,11,79,123])

console.log(river.value())
console.log(river.pop())
console.log(river.shift())
console.log(river.value())
console.log(river.getOrigin())
console.log(river.getClone())