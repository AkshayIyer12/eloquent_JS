let arrayish = {0: 'one', 1: 'two', length: 2}
let real = Array.prototype.slice.call(arrayish, 0)
console.log(real)
real.forEach(function (elt) { console.log(elt) })
