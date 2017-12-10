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

console.log(ancestry.reduce(function (min, cur) {
              if (cur.born < min.born) return cur
              else return min
            }))

let min = ancestry[0]
for (let j = 0; j < ancestry.length; j++) {
  let cur = ancestry[j]
  if (cur.born < min.born) {
    min = cur
  }
}
console.log(min)

function average (array) {
  function plus (a, b) {
    return a + b
  }
  return array.reduce(plus) / array.length
}

function age (p) {
  return p.died - p.born
}

function male (p) {
  return p.sex === 'm'
}

function female (p) {
  return p.sex === 'f'
}

console.log(average(ancestry.filter(male).map(age)))

console.log(average(ancestry.filter(female).map(age)))

let byName = {}
ancestry.forEach(function (person) {
  byName[person.name] = person
})

console.log(byName['Philibert Haverbeke'])

function reduceAncestors (person, f, defaultValue) {
  function valueFor (person) {
    if (person === null || person === undefined) {
      return defaultValue
    } else {
      return f(person, valueFor(byName[person.mother]), valueFor(byName[person.father]))
    }
  }
  return valueFor(person)
}

function sharedDNA (person, fromMother, fromFather) {
  if (person.name === 'Pauwels van Haverbeke') {
    return 1
  } else {
    return (fromMother + fromFather) / 2
  }
}

let ph = byName['Philibert Haverbeke']
console.log(reduceAncestors(ph, sharedDNA, 0) / 4)

function countAncestors(person, test) {
  function combine(current, fromMother, fromFather) {
    let thisOneCounts = current !== person && test(current)
    return fromMother + fromFather + (thisOneCounts ? 1 : 0)
  }
  return reduceAncestors(person, combine, 0)
}

function longLivingPercentage (person) {
  let all = countAncestors(person, function (person) {
              return true
            })
  let longLiving = countAncestors(person, function (person) {
                     return (person.died - person.born) >= 70
                   })
  return longLiving / all
}

console.log(longLivingPercentage(byName['Emile Haverbeke']))

let theSet = ["Carel Haverbeke", "Maria van Brussel",
              "Donald Duck"]

function isInSet (set, person) {
  return set.indexOf(person.name) > -1
}

console.log(ancestry.filter(function (person) {
              return isInSet(theSet, person)
            }))

console.log(ancestry.filter(isInSet.bind(null, theSet)))

let arrays = [[1, 2, 3], [4, 5], [6, 7]]
let flatArray = arrays.reduce((a, v) => a.concat(v))
console.log(flatArray)

let diff = ancestry.filter(function(person) {
  return byName[person.mother] !== undefined
}).map(function(person) {
  return person.born - byName[person.mother].born
})
console.log(average(diff))

const assignToCentury = data => data.reduce((a, v) => {
  let yr = Math.ceil(v.died/100)
  if (a[yr]) a[yr].push(v)
  else {
    a[yr] = []
    a[yr].push(v)
  }
  return a
}, {})
let byCentury = assignToCentury(ancestry)


const avg = arr => arr.reduce((a, b) => a+b, 0)/arr.length
for (let century in byCentury) {
  let ages = byCentury[century].map(p => p.died - p.born)
  console.log(century + ': ' + avg(ages))
}

const every = (arr, pred) => {
  for (let i = 0; i < arr.length; i++) {
    if (!pred(arr[i])) return false
  }
  return true
}

const some = (arr, pred) => {
  for (let i = 0; i < arr.length; i++) {
    if (pred(arr[i])) return true
  }
  return false
}
console.log(every([NaN, NaN, NaN], isNaN))

console.log(every([NaN, NaN, 4], isNaN))

console.log(some([NaN, 3, 4], isNaN))

console.log(some([2, 3, 4], isNaN))