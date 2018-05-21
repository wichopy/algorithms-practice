// following along with : https://www.youtube.com/watch?v=GJdiM-muYqc

const caseOne = 'ACBCA'
const caseTwo = 'ACBDEBA'
const caseThree = 'ABC'

// Return the first recurring char in a string, otherwise returns undefined.
const firstRecurring = (str) => {
  const letters = str.split('')
  const letterCounts = {}
  let first

  for (let char of letters) {
    console.log(char)
    if (letterCounts[char]) {
      first = char
      break;
    } else {
      letterCounts[char] = 1
    }
  }

  return first
}

console.log('the first recurring char is :', firstRecurring(caseOne))
console.log('the first recurring char is :', firstRecurring(caseTwo))
console.log('the first recurring char is :', firstRecurring(caseThree))

// O(n) as we only go through the array of characters once.
