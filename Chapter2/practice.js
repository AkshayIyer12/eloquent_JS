1;
!false;
/* A statement stand on it's own and amounts to something only if it affects the world. It could display something on the screen - that counts as changing the world - or it could change the internal state of the machine in an way that will affect the statements that come after it. These changes are called side effects. */
// Learn subtleties involved in leaving out semicolons
var luigisDebt = 140;
luigisDebt = luigisDebt - 32;
console.log(luigisDebt);
var one = 1, two = 2
console.log(one + two);
var theNumber = Number(prompt("Pick a number", ""));
if (!isNaN(theNumber)) alert("Your number is the square root of "+ theNumber * theNumber)
else
  alert("Hey. Why didn't you give me a number?")

function max() {
 return Array.from(arguments).sort((a,b) => a-b)[arguments.length-1]
}
max(...Array.from({length: 100}, () => Math.floor(Math.random() * 40)))
