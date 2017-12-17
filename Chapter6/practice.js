const MOUNTAINS = require('./mountains')
let rabbit = {}
rabbit.speak = function (line) {
  console.log(`The rabbit says '${line}'`)
}
rabbit.speak(`I'm alive!`)
function speak (line) {
  console.log(`The ${this.type} rabbit says '${line}'`)
}
let whiteRabbit = {type: 'white', speak: speak}
let fatRabbit = {type: 'fat', speak: speak}
whiteRabbit.speak('Oh my ears and whiskers, how late it\'s getting!')
fatRabbit.speak('I could sure use a carrot right now.')
speak.apply(fatRabbit, ['Burp!'])
speak.bind(whiteRabbit, 'Im here!!!')()
speak.call({type: 'old'}, 'Oh my!')
let empty = {}
console.log(empty.toString)
console.log(empty.toString())
console.log(Object.getPrototypeOf(empty))
console.log(Object.getPrototypeOf(empty) === Object.prototype)
console.log(Object.getPrototypeOf(Object.prototype))
console.log(Object.getPrototypeOf(isNaN) === Function.prototype)
console.log(Object.getPrototypeOf([]) === Array.prototype)
let protoRabbit = {
    speak: function (line) {
        console.log(`The ${this.type} rabbit says '${line}'`)
    }
}
let killerRabbit = Object.create(protoRabbit)
killerRabbit.type = 'killer'
killerRabbit.speak('SKREEEE!')
function Rabbit(type) {
    this.type = type
}
let killerrRabbit = new Rabbit('killer')
let blackkRabbit = new Rabbit('black')
Rabbit.prototype.speak = function (line) {
    console.log(`The ${this.type} rabbit says  '${line}'`)
}
blackkRabbit.speak('Doom...')
let arr = [1,2,3,[4],5,6, [7, [8, [9, [10, [11, [12]]]]]]]
let b = arr.toString().split(',').map(Number)
console.log(b)
Rabbit.prototype.teeth = 'small'
console.log(killerrRabbit.teeth)
killerrRabbit.teeth = 'long, sharp and bloody'
console.log(killerrRabbit.teeth)
console.log(Object.prototype.toString.call(arr))

const rowHeight = rows => rows.map(row => row.reduce((max, cell) => Math.max(max, cell.minHeight()),0))

const colWidths = rows => rows[0].map((_, i) => rows.reduce((max, row) => Math.max(max, row[i].minWidth()),0))

const drawTable = rows => {
    console.log(rows)
    let heights = rowHeight(rows)
    let widths = colWidths(rows)
    
    const drawLine = (blocks, lineNo) => blocks.map(block => block[lineNo]).join(' ')

    const drawRow = (row, rowNum) => {
        let blocks = row.map((cell, colNum) => cell.draw(widths[colNum], heights[rowNum]))
        return blocks[0].map((_, lineNo) => drawLine(blocks, lineNo)).join('\n')
    }

    return rows.map(drawRow).join('\n')
}

const repeat = (string, times) => {
    let result = ''
    for (let i = 0; i < times; i++) {
	result += string
    }
    return result
}

function TextCell (text) {
    this.text = text.split('\n')
}

TextCell.prototype.minWidth = function () {
    return this.text.reduce((width, line) => Math.max(width, line.length), 0)
}

TextCell.prototype.minHeight = function () {
    return this.text.length
}

TextCell.prototype.draw = function (width, height) {
    let result = []
    for (let i = 0; i < height; i++) {
	let line = this.text[i] || ''
	result.push(line + repeat(' ', width - line.length))
    }
    return result
}
let rows = []
for (let i = 0; i < 5; i++) {
    let row = []
    for (let j = 0; j < 5; j++) {
	if ((j + i) % 2 === 0)
	    row.push(new TextCell('##'))
	else
	    row.push(new TextCell(' '))
    }
    rows.push(row)
}
console.log(drawTable(rows))

function UnderlinedCell (inner) {
    this.inner = inner
}

UnderlinedCell.prototype.minWidth = function () {
    return this.inner.minWidth()
}

UnderlinedCell.prototype.minHeight = function () {
    return this.inner.minHeight() + 1
}

UnderlinedCell.prototype.draw = function (width, height) {
    return this.inner.draw(width, height - 1).concat([repeat('-', width)])
}

// const dataTable = data => {
//     let keys = Object.keys(data[0])
//     let headers = keys.map(name => new UnderlinedCell(new TextCell(name)))

//     let body = data.map(row => keys.map(name => new TextCell(String(row[name]))))

//     return [headers].concat(body)
// }

// console.log(drawTable(dataTable(MOUNTAINS)))

let pile = {
    elements: ['eggshell', 'orange peel', 'worm'],
    get height() {
	return this.elements.length
    },
    set height(value) {
	console.log('Ignoring attempt to set height to', value)
    }
}
console.log(pile.height)
pile.height = 100

Object.defineProperty(TextCell.prototype, 'heightProp', {
    get: function () { return this.text.length },
	set: function (value) {
	    this.text.length = value
	}
})

let cell = new TextCell('no\nway')
console.log(cell.heightProp)

cell.heightProp = 100
console.log(cell.heightProp)

function RTextCell (text) {
    TextCell.call(this, text)
}

RTextCell.prototype = Object.create(TextCell.prototype)
RTextCell.prototype.draw = function (width, height) {
    let result = []
    for (let i = 0; i < height; i++) {
	let line = this.text[i] || ''
	result.push(repeat(' ', width - line.length) + line)
    }
    return result
}
function dataTable (data) {
    let keys = Object.keys(data[0])
    let headers = keys.map(function (name) {
	return new UnderlinedCell(new TextCell(name))
    })
    let body = data.map(function (row) {
	return keys.map(function (name) {
	    let value = row[name]
	    if (typeof value === 'number')
		return new RTextCell(String(value))
	    else
		return new TextCell(String(value))
	})
    })
    return [headers].concat(body)
}

console.log(drawTable(dataTable(MOUNTAINS)))

console.log(new RTextCell('A') instanceof RTextCell)

function Vector (x, y) {
    this.x = x
    this.y = y
}

Vector.prototype.plus = function (other) {
    return new Vector(this.x + other.x, this.y + other.y)
}

Vector.prototype.minus = function (other) {
    return new Vector(this.x - other.x, this.y - other.y)
}
Object.defineProperty(Vector.prototype, 'length', {
    get: function () {
	return Math.sqrt(this.x * this.x + this.y * this.y)
    }
})
console.log(new Vector(1, 2).plus(new Vector(2, 3)))
console.log(new Vector(1, 2).minus(new Vector(2, 3)))
console.log(new Vector(3, 4).length)

function StretchCell (inner, width, height) {
    this.inner = inner
    this.width = width
    this.height = height
}

StretchCell.prototype.minWidth = function () {
    return Math.max(this.width, this.inner.minWidth())
}

StretchCell.prototype.minHeight = function () {
    return Math.max(this.height, this.inner.minHeight())
}

StretchCell.prototype.draw = function (width, height) {
    return this.inner.draw(width, height)
}

let sc = new StretchCell(new TextCell('abc'), 1, 2)
console.log(sc.minWidth())

console.log(sc.minHeight())

console.log(sc.draw(3, 2))

function ArraySeq (arr) {
    this.pos = -1
    this.array = arr
}

ArraySeq.prototype.next = function () {
    if (this.pos >= this.array.length - 1)
	return false
    this.pos++
    return true
}

ArraySeq.prototype.current = function () {
    return this.array[this.pos]
}

function logFive (seq) {
    console.log(seq)
    for (let i = 0; i < 5; i++) {
	if (!seq.next()) break
	console.log(seq.current())
    }
}

logFive(new ArraySeq([ 1, 2, 3]))

function RangeSeq (from, to) {
    this.from = from - 1
    this.to = to
}

RangeSeq.prototype.next = function () {
    if (this.from >= this.to) return false
    this.from++
    return true
}
RangeSeq.prototype.current = function () {
    return this.from
}

logFive(new RangeSeq(100, 1000))

function ArraySeq2 (array, offset) {
    this.array = array
    this.offset = offset
}
ArraySeq2.prototype.rest = function () {
    return ArraySeq2.make(this.array, this.offset + 1)
}
ArraySeq2.prototype.head = function () {
    return this.array[this.offset]
}
ArraySeq2.make = function (array, offset) {
    if (offset == null) offset = 0
    if (offset >= array.length) return null
    else return new ArraySeq2(array, offset)
}

function logFive2 (seq) {
    for (let i = 0; i < 5 && seq !== null; i++) {
	console.log(seq.head())
	seq = seq.rest()
    }
}

logFive2(ArraySeq2.make([ 1, 2, 3]))
logFive2(ArraySeq2.make([1, 2, 3, 4, 5, 6]).rest())

function RangeSeq2 (from, to) {
    this.from = from
    this.to = to
}

RangeSeq2.prototype.rest = function () {
    return RangeSeq2.make(this.from + 1, this.to)
}

RangeSeq2.prototype.head = function () {
    return this.from
}

RangeSeq2.make = function (from, to) {
    if (from > to) return null
    else return new RangeSeq2(from, to)
}

logFive2(RangeSeq2.make(400, 1000).rest())
