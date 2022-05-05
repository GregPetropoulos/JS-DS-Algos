// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// * Solution 1
function chunk(array, size) {
  // Create a new empty array
  let chunked = [];

  //   Loop through array with FOR OF and look at last element of chunked and push a new chunk into chunked with the element iterating over
  for (let element of array) {
    //   variable for last element in chunked
    const last = chunked[chunked.length - 1];

    // if last element does not exist or length of last is equal to chunk size then push a new chunk into chunked
    if (!last || last.length === size) {
        // pushing in new chunk and put element we are iterating over inside the chunk
      chunked.push([element]);
    } else {
        // already have a chunk and is not yet full
      last.push(element);
    }
  }
  return chunked;
}

// * Solution 2
function chunk(array, size) {
  // Create empty array
  const chunked = [];

  //   set the index to 0
  let index = 0;

  while (index < array.length) {
    // Slice off a copy of original and push into the chunked array as an array.
    chunked.push(array.slice(index, index + size));

    // incrementing by the size arg
    index += size;
  }
  return chunked;
}

module.exports = chunk;
