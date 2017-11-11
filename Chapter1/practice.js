Infinity === Infinity
-Infinity === -Infinity
NaN === NaN
Infinity === -Infinity
"Patch my boat with chewing gum"
'Monkey\'s wave goodbye'
"A newline character is written like \"\\n\"."
typeof 4.5
typeof 'x'
typeof 4
const checkType = (obj) => ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
console.log('checkType ------------------------------------------>')
console.log(checkType({a: 4}))
console.log(checkType([1, 2, 3]))
console.log(checkType(new ReferenceError))
console.log(checkType(new Date))
console.log(checkType(/a-z/))
console.log(checkType(Math))
console.log(checkType(JSON))
console.log(checkType(new Number(4)))
console.log(checkType(new String('abc')))
console.log(checkType(new Boolean('true')))
console.log(checkType(null))
console.log(checkType(true))
console.log(checkType(false))
console.log('Typeof ------------------------------------------>')
console.log(typeof {a: 4}); //"object"
console.log(typeof [1, 2, 3]); //"object"
(function() {console.log(typeof arguments)})(); //object
console.log(typeof new ReferenceError); //"object"
console.log(typeof new Date); //"object"
console.log(typeof /a-z/); //"object"
console.log(typeof Math); //"object"
console.log(typeof JSON); //"object"
console.log(typeof new Number(4)); //"object"
console.log(typeof new String("abc")); //"object"
console.log(typeof new Boolean(true)); //"object"
'Aadvark' < 'Aadvarg'
'Aadvark' < 'Aadvarl'
true && false
true && true
!true
!false
1 + 1 === 2 && 10 * 10 > 50
true ? 1 : 2
false ? 1 : 2
8 * null
'5' - 1
"5" + 1
"five" * 2
false === 0
null == undefined // -> true
null == 0 // -> false
undefined == 0
undefined == null
null || 'user'
'karl' || 'user'
false && 10
