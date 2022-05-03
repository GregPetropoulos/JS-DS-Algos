// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
// *-----------------------------------------------------
// * Solution 1--Fastest
function palindrome(str) {

const reverseStr = str.split('').reduce((reversed, character)=> character+reversed,'')
if(reverseStr===str){
    return true
}
return false
}
// *-------------------------------------------------

// *-----------------------------------------------------
//* Solution 2--Best
const palindrome=(str)=>{
    reversed = str.split('').reverse().join('');
    return str === reversed;
}
// *-------------------------------------------------

// *-----------------------------------------------------
// * Solution 3--Using .every()
const palindrome =(str)=> {
    return str.split('').every((char,i)=> {
        return char=== str[str.length-i-1];
    })
}
// *-----------------------------------------------------


palindrome('racecar')
module.exports = palindrome;
