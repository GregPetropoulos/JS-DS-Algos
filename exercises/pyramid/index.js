// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// n determines the shape so if n=3 then it will 3 levels aka 3 rows
// function pyramid(n) {
//   // need to get midpoint of row in the column loop
//   const midpoint = Math.floor((2 * n - 1) / 2);

//   // 1st loop iterates through rows
//   for (let row = 0; row < n; row++) {
//     let level = '';

//     // 2nd inner loop iterates over columns
//     // 2n-1 gives the correct number of columns
//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//      console.log(level)
//   }
// }
//Recursive solution
function pyramid(n,row=0,level=''){
    
    //once pyramid finished
    if(row===n){
       return 
    };
    
    // at end of the level to the right
    if(level.length===2*n-1){
        console.log(level);
        return pyramid(n,row+1)
    }
    //weather or not to add a space or pound
    const midpoint=Math.floor((2*n-1)/2)
    let add;
    if(midpoint-row<=level.length && midpoint+row>=level.length){
add='#'
    }else{
        add=' ';
    }
    pyramid(n,row,level+add)

}

module.exports = pyramid;
