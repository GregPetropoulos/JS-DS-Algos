// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
//*-------------------------------------------------
// * Solution 1--Built in
function reverse(str) {
  return str.split('').reverse().join('');
}
//*-------------------------------------------------
//*-------------------------------------------------
// * Solution 2 FOR OF Loop Fastest
const reverse = (str) => {
  let reversed = '';

  // * This longform for loop can become buggy
  // for (let i = 0; i < str.length; i++) {}

  // * USE FOR OF LOOPS INSTEAD OF FOR LOOP
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
};
//*-------------------------------------------------

//*-------------------------------------------------
//* Solution 3--Showoff with Reduce
// Reduce method 2 args(arrow function and starting arg)
// Reduced first value is the second argument empty string= reversed
// Reduced the character is the array reduce is operating on
const reverse = (str) => {
  return str
    .split('')
    .reduce((reversed, character) => character + reversed, '');
};
//*-------------------------------------------------

reverse('hello');
module.exports = reverse;
