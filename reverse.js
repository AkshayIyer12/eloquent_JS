const reverseArray = (input) => input.reduceRight((a, b) => a.concat(b), [])
const reverseArrayInPlace = (input) => input.reduceRight((a, b) => arrayValue = a.concat(b), [])
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
