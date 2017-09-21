const range = (start, end, step) => {
	let sum = 0
	if(step === undefined) step = 1
	if(start < end){
	  for(let i = start; i <= end ; i += step) {
	    sum += i
	  }
	} else {
		for(let i = start; i >= end; i += step) {
			sum += i
		}
	}
	return sum
}
console.log(range(1, 10))
console.log(range(5, 2, -1))

