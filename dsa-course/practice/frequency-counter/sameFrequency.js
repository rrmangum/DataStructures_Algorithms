// UNDERSTAND THE PROBLEM
// -Restate: compare two positive numbers for the same amount of each number
// -Inputs: two positive integers 1 and 1 or 129085891236198571349087561 and 109285710982356112357625
//  what about "123" and 123 or "546" and "654". Don't have to worry about decimals
// -Outputs: boolean
// -Enough: right now, yes
// -Label: func: sameFrequency, inputs: num1, num2, outputs: true/false

// CONCRETE EXAMPLES
// -Simple
// sameFrequency(182, 281) // true
// sameFrequency(34, 14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22, 222) // false
// -Complex
// sameFrequency() - couldn't think of any
// -Empty
// sameFrequency() // false
// -Invalid
// sameFrequency("12345", "22233") // false
// sameFrequency("", "") // false

// BREAK IT DOWN
// function sameFrequency(num1, num2) {
// create an object to hold the keys (each character of the number)
// and its value (the frequency it appears)
// convert the numbers to arrays of numbers so we can loop through them
// loop through the first array
// add it's keys and frequencies to the comparison object
// loop through the second array
// if the value in this array is the same as the key in the object
// decrement the value for that key
// if we encounter a zero value for a key
// return false
// return true at the end
// }

// SOLVE/SIMPLIFY
function sameFrequency(num1, num2) {
  let lookup = {};
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) {
    return false;
  }
  for (let currentNumber of num1) {
    lookup[currentNumber] = (lookup[currentNumber] || 0) + 1;
  }
  for (let currentNumber of num2) {
    if (!lookup[currentNumber]) {
      return false;
    } else {
      lookup[currentNumber] -= 1;
    }
  }
  return true;
}

// Refactor
// I'm not certain this can be improved. It is linear time complexity,
// but potentially could be faster with recursion?

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
