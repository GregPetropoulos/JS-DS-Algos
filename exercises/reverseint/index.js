// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  //turn number into string reverse it
  let reversed = n.toString().split('').reverse().join('');

  //turn reversed string back in to a number and handle the sign
  //Math.sign to handle the sign
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
