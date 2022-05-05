// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  // Must use manual FOR LOOP -- start  at 1
  for (let i = 1; i <= n; i++) {
    //   check number is  a multiple of 3 and 5
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('fizzbuzz');
    }
    //   check number is  a multiple of 3
    else if (i % 3 === 0) {
      console.log('fizz');
    }
    //   check number is  a multiple of 5
    else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

module.exports = fizzBuzz;
