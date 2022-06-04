//* FIND THE DUPLICATES IN A AN ARRAY

const arr = [1, 2, 3, 4, 5, 4, 1]; //SAMPLE ARRAY

const arr2 = [
  23, 32, 23, 23, 59, 0, 00, 13, 11, 100, 1, 2, 3, 4, 5, 4, 4, 4, 4, 1
]; //SAMPLE ARRAY

const sortAlgo = (arr) => {
  //*USE SET OBJECT TO CREATE AN ARRAY WITH UNIQUE VALUES
  const uniqueArr = [...new Set(arr)];

  //*COMPARE THE LENGTHS OF THE UNIQUE ARRAY AND ORIGINAL ARRAY AND LOG IF THE DUPLICATE EXISTS
  if (uniqueArr.length === arr.length) {
    console.log('There are not duplicates');
  } else {
    console.log('There are duplicates');
  }

  //*TO FIND THE NUMBER OF DUPLICATES USE .HAS WITH THE SET NEW OBJECT AND .FILTER
  const unique = new Set(arr);
  console.log(unique);
  const duplicates = arr.filter((item) => {
    if (unique.has(item)) {
      unique.delete(item);
    } else {
      return item;
    }
  });
  return `These are the duplicates ${duplicates}`;
};
console.log(sortAlgo(arr2));
