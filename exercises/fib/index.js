// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//Iteration solution linear time
// function fib(n) {
// let result=[0,1]
//     for(let i=2; i<=n;i++){
// const a= result[i-1]
// const b= result[i-2]
// result.push(a+b);
//     }
//     return result[n]

// }
//*Recursive solution exponential time which is poor. Interviewer will ask can it be improved and it can with Memoization
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }
// * The is the best solution recursive and it'being memoized to improve the time complexities
// This memoize can be used universally
function memoizer(fn) {
  const cache = {};
  // This anonymous function is the passed argument ie fib.

  return function (...args) {
    //cache mechanism if this object key value exits then return it  
    if (cache[args]) {
        return cache[args]
    }
    //This is the result fo the slowFib function
    const result=fn.apply(this,args)
    cache[args]=result

    return result
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
const fib = memoizer(slowFib);
module.exports = fib;
