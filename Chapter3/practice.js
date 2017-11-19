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

// console.log(chicken() + ' came first')

function powerUp (base, exponent) {
  if (exponent === undefined) {
    exponent = 2
  }
  var result = 1
  for (var count = 0; count < exponent; count++) {
    result *= base
  }
  return result
}

console.log(powerUp(4))

console.log(powerUp(4, 3))

console.log('R', 2, 'D', 2)

// closures
function wrapValue (n) {
  var localVariable = n
  return function () {
    return localVariable
  }
}

var wrap1 = wrapValue(1)
var wrap2 = wrapValue(2)

console.log(wrap1())
console.log(wrap2())

// iife
let fp = (function wrapValue () {
  var localVariable = 1
  return function () {
    return localVariable++
  }
}())

for (let i = 0; i < 5; i++) {
  console.log(fp())
}

function multiplier (factor) {
  return function (number) {
    return number * factor
  }
}

var twice = multiplier(2)
console.log(twice(5))

function powered (base, exponent) {
  if (exponent === 0) {
    return 1
  } else {
    return base * powered(base, exponent - 1)
  }
}

console.log(powered(2, 3))

function findSolution (target) {
  function find (current, history) {
    if (current === target) {
      return history
    } else if (current > target) {
      return null
    } else {
      return find(current + 5, '(' + history + ' + 5) ') ||
      find(current * 3, '(' + history + ' * 3)')
    }
  }
  return find(1, '1')
}

console.log(findSolution(14))


// Why we require a function ?
function printFarmInventory (cows, chickens) {
  var cowString = String(cows)
  while (cowString.length < 3) {
    cowString = '0' + cowString
  }
  console.log(cowString + ' Cows')
  var chickenString = String(chickens)
  while (chickenString.length < 3) {
    chickenString = '0' + chickenString
  }
  console.log(chickenString + ' Chickens')
}

printFarmInventory(7, 11)

function printZeroPaddedWithLabel (number, label) {
  var numberString = String(number)
  while (numberString.length < 3) {
    numberString = '0' + numberString
  }
  console.log(numberString + ' ' + label)
}

function printFarmInventory2 (cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, 'Cows')
  printZeroPaddedWithLabel(chickens, 'Chickens')
  printZeroPaddedWithLabel(pigs, 'Pigs')
}

printFarmInventory2(7, 11, 8)

function zeroPad (number, width) {
  var string = String(number)
  while (string.length < width) {
    string = '0' + string
  }
  return string
}
function printFarmInventory3 (cows, chickens, pigs) {
  console.log(zeroPad(cows, 3) + ' Cows')
  console.log(zeroPad(chickens, 3) + ' Chickens')
  console.log(zeroPad(pigs, 3) + ' Pigs')
}

printFarmInventory3(7, 16, 13)

function min (a, b) {
  if (a < b) {
    return a
  } else {
    return b
  }
}
console.log(min(0, 10))
console.log(min(0, -10))

function isEven (a) {
  if (a === 0) {
    return true
  } else if (a === 1) {
    return false
  } else if (a < 0) {
    return isEven(-a)
  } else {
    return isEven(a - 2)
  }
}
console.log(isEven(50))
console.log(isEven(13))
console.log(isEven(-2))
console.log(isEven(-13))

function countBs (str) {
  return str.split('').reduce((accum, value) => {
    if (value === 'B') {
      accum += 1
    }
    return accum
  }, 0)
}
console.log(countBs('BgBCBeBaBfBdBC'))
console.log(countBs('Bc'))

function countChar (str, char) {
  return str.split('').reduce((accum, value) => {
    if (value === char) {
      accum += 1
    }
    return accum
  }, 0)
}

console.log(countChar('kakkerlak', 'k'))
