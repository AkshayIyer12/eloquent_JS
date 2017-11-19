var makeNoise = function () {
  console.log('Pling!')
}

makeNoise()

var power = function (base, exponent) {
  var result = 1
  for (var count = 0; count < exponent; count++) {
    result *= base
  }
  return result
}

console.log(power(2, 10))
console.log(power(2, 'hello')) // A runtime error

var x = 'outside'

var f1 = function () {
  var x = 'inside f1'
}
f1()
console.log(x)

var f2 = function () {
  x = 'inside f2'
}
f2()
console.log(x)

var landscape = function () {
  var result = ''
  var flat = function (size) {
    for (var count = 0; count < size; count++) {
      result += '_'
    }
  }
  var mountain = function (size) {
    result += '/'
    for (var count = 0; count < size; count++) {
      result += "'"
    }
    result += '\\'
  }
  flat(3)
  mountain(4)
  flat(6)
  mountain(4)
  flat(3)
  return result
}
console.log(landscape())

var something = 1
{
  var something = 2
  something = something << 1
}
console.log(something)

var some = 1
{
  let some = 2
  some = some << 1
}
console.log(some)

var launchMissiles = function (value) {
  console.log('Do something ' + value)
}
var safeMode = 0
// Truthy / falsy values
if (safeMode) {
  launchMissiles = function (value) {
    console.log('Do nothing ' + value)
  }
  launchMissiles('World')
}

launchMissiles('GNU')

// Declaration Notation
function square (x) {
  return x * x
}

// Function declarations are not part of top to bottom flow
console.log('The future says:', future())

function future () {
  return 'We STILL have no flying cars.'
}

function example () {
  function a () {
    return 20
  }
  if (something) {
    // Never declare function inside
    function b () {
      return 5
    }
    console.log(b())
  }
  console.log(a())
}

example()

function greet(who) {
  console.log('Hello ' + who)
}
greet('harry')
console.log('Bye')

// Max call stack size exceeded
function chicken () {
  return egg()
}

function egg () {
  return chicken()
}

console.log(chicken() + ' came first')

