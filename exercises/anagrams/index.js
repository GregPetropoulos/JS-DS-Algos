// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//* Solution #1
function anagrams(stringA, stringB) {
  // Write helper function to avoid creating two objects and two for loops
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  // Pull out the keys of objects and check if they have the same amount of characters
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  // FOR IN loop to compare the objects
  for (let char in aCharMap) {
    // checking if the value of the key is not the same in both objects then it's not an anagram example: {a:1} and {a:10} are false
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
}

// HELPER FUNCTION TO BUILD CHARACTER MAP
const buildCharMap = (str) => {
  // empty object
  const charMap = {};

  // for loop with embedded regex cleanup of string and spaces, punctuation, etc
  for (char of str.replace(/[^\w]/g, '').toLowerCase()) {
    //   char is the key then assigned to 1 or increment by 1
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
};


//* Solution #2
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
  };
const cleanString = (str) => {

// Clean up spaces and punctuation with regex, make all lower case split into an array , sort alphabetically and join back array of string
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

}  


module.exports = anagrams;
