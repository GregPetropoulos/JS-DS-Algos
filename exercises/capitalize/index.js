// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// * Solution #1 Best Answer
function capitalize(str) {
  // Make an empty array to store result
  let words = [];

  // Loop through an array that splits each word in the string by space
  for (let word of str.split(' ')) {
    // During iteration upper case the first letter of each word (item)
    // Slice after the first letter and make it lower case
    // Concatenate the word back together
    // Push into empty words array
    words.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    // The result here would like [Hello, World, ]
  }

  //Join the words together with a space character
  return words.join(' ');
}

// * Solution #2
function capitalize(str) {
  // Capitalize the the first letter of the string to handel limitation of a string passed with an already capitalize first letter
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    // look to left of current character and if there is a space then uppercase and add to result string
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = capitalize;
