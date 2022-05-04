// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// *----------------------
// convert string to object to get key:values
// character:number find how many times it occurs
// example 'Hello There!" converts to
// {
//     H:1,
//     e:3,
//     l:2,
//     o:1,
//     '':1,
//     t:1,
//     h:1,
//     r:1,
//     !:1,
// }
//FOR OF LOOP--loop over string or array
//FOR IN LOOP -- to loop over an object

function maxChar(str) {
  // create an object
  let charMap = {};

  // helper variable for FOR IN LOOP comparison, anything greater than max
  let max = 0;

  // helper variable for FOR IN LOOP comparison, find key with max
  let maxChar = '';

  //*FIRST LOOP BUILD CHARACTER MAP
  // FOR OF LOOP to loop over the string
  for (let char of str) {
    // add key and values to object
    if (charMap[char]) {
      // if key:value already exist increment 1
      charMap[char]++;
    } else {
      // if chars (key in empty object) does not exist set first iteration to 1
      charMap[char] = 1;
    }
  }
  console.log(charMap); //verify character map worked

  //*SECOND LOOP TO LOCATE KEY OCCURRENCES AND UPDATE MAXCHAR
  // USING A FOR IN -- for looping over an existing objects keys called assigned char
  for (let char in charMap) {
    //  find the char value in charMap that is greater than max and update the max
    if (charMap[char] > max) {
      // set max to most occurring character
      max = charMap[char];
      // assign empty string to the character
      maxChar = char;
    }
  }
  return maxChar;
}
// *----------------------

module.exports = maxChar;
