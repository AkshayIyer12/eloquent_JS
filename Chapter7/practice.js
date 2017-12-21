function Vector (x, y) {
  this.x = x
  this.y = y
}
Vector.prototype.plus = function (other) {
  return new Vector(this.x + other.x, this.y + other.y)
}
// let grid = ['top left', 'top middle', 'top right',
//             'bottom left', 'bottom middle', 'bottom right']
// console.log(grid[2 + (1 * 3)])

function Grid (width, height) {
  this.space = new Array(width * height)
  this.width = width
  this.height = height
}
Grid.prototype.isInside = function (vector) {
  return vector.x >= 0 && vector.x < this.width &&
    vector.y >= 0 && vector.y < this.height
}
Grid.prototype.get = function (vector) {
  return this.space[vector.x + this.width * vector.y]
}
Grid.prototype.set = function (vector, value) {
  this.space[vector.x + this.width * vector.y] = value
}
let grid = new Grid(5, 5)
console.log(grid.get(new Vector(1, 1)))
grid.set(new Vector(1, 1), 'X')
console.log(grid.get(new Vector(1, 1)))
let  directions = {
  "n":   new  Vector( 0,  -1),
  "ne": new  Vector( 1,  -1),
  "e":   new  Vector( 1,   0),
  "se": new  Vector( 1,   1),
  "s":   new  Vector( 0,   1),
  "sw": new  Vector(-1,   1),
  "w":   new  Vector(-1,   0),
  "nw": new  Vector(-1,  -1)
}
function randomElement (array) {
  return array[Math.floor(Math.random() * array.length)]
}
let directionNames = 'n ne e se s sw w nw'.split(' ')
function BouncingCritter () {
  this.direction = randomElement(directionNames)
}
BouncingCritter.prototype.act = function (view) {
  if (view.look(this.direction) !== ' ') {
    this.direction = view.find(' ') || 's'
  }
  return {type: 'move', direction: this.direction}
}
function elementFromChar (legend, ch) {
  if (ch === ' ') return null
  let element = new legend[ch]()
  element.originalChar = ch
  return element
}
function World (map, legend) {
  let grid = new Grid(map[0].length, map.length)
  this.grid = grid
  this.legend = legend

  map.forEach(function (line, y) {
    for (let x = 0; x < line.length; x++) {
      grid.set(new Vector(x, y), elementFromChar(legend, line[x]))
    }
  })
}

function charFromElement (element) {
  if (element === null) return ' '
  else
    return element.originChar
}
World.prototype.toString = function () {
  let output = ''
  for (let y = 0; y < this.grid.height; y++) {
    for (let x = 0; x < this.grid.width; x++) {
      let element = this.grid.get(new Vector(x, y))
      output += charFromElement(element)
    }
    output += '\n'
  }
  return output
}
// let world = new World(plan , {'#': Wall,
//                               'o': BouncingCritter})
// console.log(world.toString())
let test = {
  prop: 10,
  addPropTo: function (array) {
    return array.map(function (elt) {
             return this.prop + elt
                     }.bind(this))
  }
}
console.log(test.addPropTo([5, 9]))
let test2 = {
  prop: 20,
  addPropTo: function (array) {
    return array.map(function (elt) {
             return this.prop + elt
           }, this)
  }
}
console.log(test2.addPropTo([50, 70]))
Grid.prototype.forEach = function (f, context) {
  for (let y = 0; y < this.height; y++) {
    for (let x = 0; x < this.width; x++) {
      let value = this.space[x + y * this.width]
      if (value !== null) {
        f.call(context, value, new Vector(x, y))
      }
    }
  }
}