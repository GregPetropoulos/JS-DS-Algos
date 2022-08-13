//* REMOVE THE DUPLICATES IN A AN ARRAY 4 WAYS FROM FASTEST TO SLOWEST
//* new Set()
//* Object
//* Filter
//* Loop over an Array

//SAMPLE ARRAY
const arr1 = [1, 2, 3, 4, 5, 4, 1];
//SAMPLE ARRAY 2
const arr2 = [
  23, 32, 23, 23, 59, 0, 00, 13, 11, 100, 1, 2, 3, 4, 5, 4, 4, 4, 1];
//SAMPLE ARRAY 3
const arr3 = ['bob', 'sally', 'bob', 'harry', 'john', 'jose'];

//! Execution time:  .5ms
// * Solution 1
//* Use the Set constructor to create an object of unique values and return the values spread out into an array
const removeDuplicate1 = (arr) => {
  return [...new Set(arr)];
};
console.log(removeDuplicate1(arr3));

//!  Execution time:  0.5999999046325684 ms
//* Solution 2
// * Build an object with map looping over array, if value in object does not exist then add it to the empty uniqueArray
const removeDuplicate2 = (arr) => {
  let charMap = {};
  let uniqueArray = [];
  arr.map((item) => {
    if (!(item in charMap)) {
      //if the item doesn't exist in the charMap object add it to the uniqueArray
      uniqueArray = [...uniqueArray, item];
      // tells map loop to return the item set to true
      charMap[item] = true;
    }
  });

  return uniqueArray;
};
console.log(removeDuplicate2(arr3));

//! Execution time: 0.6999999284744263 ms
// * Solution 3
// * Filter array and if it already exist in charMap object return false else true
const removeDuplicate4 = (arr) => {
  const charMap = {};
  return arr.filter((item) => {
    if (charMap[item]) {
      return false;
    } else {
      charMap[item] = true;
      return true;
    }
  });
};
console.log(removeDuplicate4(arr3));
//!  Execution time: 0.7999999523162842 ms
// *SOLUTION # 4
//* Create an empty array, use a forEach loop and spread element into an array if it doesn't already exist
const removeDuplicate3 = (arr) => {
  let unique = [];
  arr.forEach((element) => {
    if (!unique.includes(element)) {
      //unique.push(element)
      unique = [...unique, element];
    }
  });
  return unique;
};
console.log(removeDuplicate3(arr3));