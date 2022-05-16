// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// //*SOLUTION 1-ITERATION
// SIMILAR TO A 2D MATRIX, 2 LOOPS GOVERNED BY THE COLUMN AND ROW POSITION, C1,R0
function steps(n) {
  // OUTER- First loop through each row
  for (let row = 0; row < n; row++) {
    let stair = '';
    // INNER-Second for loop inside of first for loop
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
       }
    }
    console.log(stair);
  }
}

//*SOLUTION 2-RECURSION
// THE STAIR STRING GOVERNS THE LOOP
function steps(n, row = 0, stair = '') {
  //* BASE CASE 
  if (n === row) {
    // base case reached do nothing
    return;
  }

//* HIT END OF ROW
  // When the stair string length is the same as the input number it's at the end of the row then log stair
  if (n === stair.length) {
    console.log(stair); //hit end of row and will log the stair
    return steps(n, row + 1); //call steps for the next row-increment
  }

//* ADD CHARACTER TO ROW
// Before hitting then end of the row add a '#'
if(stair.length<=row){
    stair += '#';
}else{
    stair +=' ';
}
// After adding character must call steps again
steps(n,row, stair )
}

// steps(2);
module.exports = steps;
