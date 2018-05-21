var caseOne = 'ACBCA'
var caseTwo = 'ACBDEBA'
var caseThree = 'ABC'

var firstRecurring = (str) => {
	const letters = str.split('')
	const letterCounts = {}
	let first

	letters.forEach(char => {
		if (letterCounts[char]) {
			letterCounts[char] += 1
			if (first === undefined && letterCounts[char] === 2) {
				first = char
			}
		} else {
			letterCounts[char] = 1
		}
	})

	return first
}

console.log(firstRecurring(caseOne))
console.log(firstRecurring(caseTwo))
console.log(firstRecurring(caseThree))
