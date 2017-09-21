var obj = {here: {is: "an"}, object: 2};
const deepEqual = (obj1, obj2) => {
	let count = 0
	if ((obj1 !== null) && (obj2 !== null)) {
		if(obj1.hasOwnProperty('here') && obj2.hasOwnProperty('here')) {
			if(obj1.here === obj2.here)
				count++
		}
		if(obj1.hasOwnProperty('object') && obj2.hasOwnProperty('object')) {
			if(obj1.object === obj2.object)
				count++
		}
		if(count>1)
			return true
		else 
			return false
	}
}
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
