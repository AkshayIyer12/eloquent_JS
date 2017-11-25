var journalAll = require('./04_data')
var listOfNumbers = [1, 2, 3, 4]
console.log(listOfNumbers[2])
/* All JavaScript values have properties.
The exception are:
1. null
2. Undefined
On trying to access the property of these non-values will show an error.

Two common way to access property in JavaScript are with dot and [].
Both value.x and value[x] access a property on value but not necessarily the same.
1. When using dot, the part after the dot must a valid variable name.
2. When using [], the expression between the brackets is evaluated and uses the result to get the property name.
*/

var mack = []
mack.push('Mack')
mack.push('the', 'knife')
console.log(mack)
console.log(mack.join(' '))
console.log(mack.pop())
console.log(mack)

var day1 = {
  squirrel: false,
  events: ['work', 'touched tree', 'pizza', 'running', 'television']
}
console.log(day1.squirrel)
console.log(day1.wolf)
day1.wolf = false
console.log(day1.wolf)
console.log('wolf' in day1)
var description = {
  work: 'Went to work',
  'touched tree': 'Touched a tree'
}
console.log(description)

var anObject = {
  left: 1,
  right: 2
}

console.log(anObject.left)
delete anObject.left
console.log(anObject.left)
// A very helpful operator `in` . Can only be applied to a String and an object
console.log('left' in anObject)
console.log('right' in anObject)

var journal = [{
    events: ['work', 'touched tree', 'pizza',
      'running', 'television'
    ],
    squirrel: false
  },
  {
    events: ['work', 'ice cream', 'cauliflower',
      'lasagna', 'touched tree', 'brushed teeth'
    ],
    squirrel: false
  },
  {
    events: ['weekend', 'cycling', 'break',
      'peanuts', 'beer'
    ],
    squirrel: true
  }
]
var object1 = {
  value: 10
}
var object2 = object1
var object3 = {
  value: 10
}

console.log(object1 === object2)
console.log(object1 === object3)
// → true
// → false

object1.value = 15
console.log(object2.value)
// → 15
console.log(object3.value)
// → 10

journal = []

function addEntry(events, didITurnIntoASquirrel) {
  journal.push({
    events: events,
    squirrel: didITurnIntoASquirrel
  })
}
addEntry(['work', 'touched tree', 'pizza', 'running', 'television'], false)
addEntry(['work', 'ice cream', 'cauliflower', 'lasagna', 'touched tree', 'brushed teeth'], false)
addEntry(['weekend', 'cycling', 'break', 'peanuts', 'beer'], true)

console.log(journal)

function phi(table) {
  return (table[3] * table[0] - table[1] * table[2]) / Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]))
}

console.log(phi([76, 9, 4, 1]))

function hasEvent(event, entry) {
  return entry.events.indexOf(event) !== -1
}

function tableFor(event, journaler) {
  var table = [0, 0, 0, 0]
  for (var i = 0; i < journaler.length; i++) {
    var entry = journaler[i],
      index = 0
    if (hasEvent(event, entry)) {
      index += 1
    }
    if (entry.squirrel) {
      index += 2
    }
    table[index] += 1
  }
  return table
}
console.log(tableFor('pizza', journalAll))

var map = {}

function storePhi(event, phi) {
  map[event] = phi
}
storePhi('pizza', 0.069)
storePhi('touched tree', -0.081)
console.log('pizza' in map)
// → true
console.log(map['touched tree'])
// → -0.081

for (var event in map) {
  console.log("The correlation for '" + event + "' is " + map[event])
}

function gatherCorrelations(journal) {
  var phis = {}
  for (var entry = 0; entry < journal.length; entry++) {
    var events = journal[entry].events
    for (var i = 0; i < events.length; i++) {
      var event = events[i]
      if (!(event in phis)) {
        phis[event] = phi(tableFor(event, journal))
      }
    }
  }
  return phis
}

var correlation = gatherCorrelations(journalAll)
for (var event in correlation) {
  var correlat = correlation[event]
  if (correlat > 0.1 || correlat < -0.1) {
    console.log(event + ':' + correlat)
  }
}

for (var i = 0; i < journalAll.length; i++) {
  var entry = journalAll[i]
  if (hasEvent('peanuts', entry) && !hasEvent('brushed teeth', entry)) {
    entry.events.push('peanut teeth')
  }
}
console.log(phi(tableFor('peanut teeth', journalAll)))

var todoList = [1, 2, 4, 5, 6]

function rememberTo(task) {
  todoList.push(task)
}

function whatIsNext() {
  return todoList.shift()
}

function urgentlyRememberTo(task) {
  todoList.unshift(task)
}
console.log([1, 2, 3, 45].indexOf(2))
console.log([1, 2, 4, 2, 5].lastIndexOf(2))
console.log([0, 1, 2, 4, 5].slice(2, 4))
console.log([0, 1, 2, 4, 5].slice(2))

function remove (array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1))
}
console.log(remove(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 2))

var myString = 'Fido'
myString.property = 'value'
console.log(myString.property)
/* You can set new properties to type string, number, boolean but JS doesn't store those properties as the values are immutable and cannot be changed */

console.log('coconuts'.slice(4, 7))
console.log('coconut'.indexOf('u'))
console.log(' okay \n'.trim())


function range (start, end, step) {
  let arr = []
  if (step === null) step = 1
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      arr.push(i)
    }
  } else {
    for (let i = start; i >= end; i += step) {
      arr.push(i)
    }
  }
  return arr
}
function sum (arr) {
  let summedUp = arr.reduce((accum, value) => {
    accum += value
    return accum
  }, 0)
  return summedUp
}

console.log(sum(range(5, 2, -1)))

function arrayToReverseList (array) {
  let list = null
  for (let i = 0; i < array.length; i++) {
    list = {
      value: array[i],
      rest: list
    }
  }
  return list
}

console.log(arrayToReverseList([1, 2, 3]))

function arrayToList (arr) {
  let list = null
  for (let i = arr.length - 1; i >= 0; i--) {
    list = {
      value: arr[i],
      rest: list
    }
  }
  return list
}

console.log(arrayToList([10, 20, 30]))

function listToArray (list) {
  let array = []
  for (let nodal = list; nodal; nodal = nodal.rest) {
    array.push(nodal.value)
  }
  return array
}

console.log(listToArray(arrayToList([10, 20, 30])))
console.log(listToArray(arrayToReverseList([1, 2, 3])).reverse())