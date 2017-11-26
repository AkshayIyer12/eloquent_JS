let array = [1, 2, 3]
for (let i = 0; i < array.length; i++) {
  let current = array[i]
  console.log(current)
}

function logEach (array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}

function forEach (array, action) {
  for (let i = 0; i < array.length; i++) {
    action(array[i])
  }
}

forEach(['Loki', 'Thor', 'Hulk'], console.log)

let numbers = [1, 2, 3, 4, 5], sum = 0
forEach(numbers, function (number) {
  sum += number
})
console.log(sum)

function greaterThan (n) {
  return function (m) {
    return m > n
  }
}

let greaterThan10 = greaterThan(10)
console.log(greaterThan10(11))

function noisy (f) {
  return function (arg) {
    console.log('Calling with', arg)
    let val = f(arg)
    console.log('Called with', arg, '- got', val)
    return val
  }
}
noisy(Boolean)(0)

function unless (test, then) {
  if (!test) then()
}

function repeat (times, body) {
  for (let i = 0; i < times; i++) body(i)
}

repeat(3, function (n) {
  unless(n % 2, function () {
    console.log(n, 'is even')
  })
})

function transparentWrapping (f) {
  return function () {
    return f.apply(null, arguments)
  }
}

console.log(transparentWrapping(Boolean)(0, 1, 2, 3))

let string = JSON.stringify({name: 'X', born: 1980})
console.log(string)
console.log(JSON.parse(string))
let ancestry = JSON.parse(require('./ancestry'))

let filteredData = ancestry.filter(x => {
  if (x.born > 1900 && x.born < 1925) {
    return x
  }
})
console.log(filteredData)

function filter (array, test) {
  let passed = []
  for (let i = 0; i < array.length; i++) {
    if (test(array[i])) {
      passed.push(array[i])
    }
  }
  return passed
}
console.log(filter(ancestry, function (person) {
  return person.born > 1900 && person.born < 1925
            }))

console.log(ancestry.filter(function (person) {
              return person.father === 'Carel Haverbeke'
            }))

function map (array, transform) {
  let mapped = []
  for (let i = 0; i < array.length; i++) {
    mapped.push(transform(array[i]))
  }
  return mapped
}

let overNinety = ancestry.filter(function (person) {
                   return person.died - person.born > 90
                 })

console.log(map(overNinety, function (person) {
              return person.name
            }))
function reduce (array, combine, start) {
  let current = start
  for (let i = 0; i < array.length; i++) {
    current = combine(current, array[i])
  }
  return current
}
console.log(reduce([1, 2, 3, 4], function (a, b) {
              return a + b
            }, 0))
