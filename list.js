const arrayToList = (input) => {
  let list
  for(let i = input.length - 1; i >= 0 ; i--) {
  	list = {value: input[i], rest: list}
}
  return list
 }
const listToArray = (input) => {
  let arr = []
  while (input.rest !== undefined) {
    arr.push(input.value)
    input = input.rest
    if (input.rest === undefined) {
      arr.push(input.value)
    }
  }
  return arr
}
const prepend = (element, list) => {
  let obj = {}
  obj.value = element
  obj.rest = list
  return obj
}
const nth = (list, position) => {
  for(let i = 0; i <= position; i++) {
    if(i === position) {
	  return list.value
    }
  list = list.rest
}
}
console.log(arrayToList([10, 20, 30]))
console.log(listToArray(arrayToList([10, 20, 30])))
console.log(prepend(50, prepend(20, null)))
console.log(nth(arrayToList([10, 20, 30]), 1));