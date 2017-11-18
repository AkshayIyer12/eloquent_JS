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
