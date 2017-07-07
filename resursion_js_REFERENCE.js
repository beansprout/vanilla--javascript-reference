// recursion
// to solve must break up into smaller problem
// recursively call ourselves on that smaller prblem
// keep breaking down into smaller and smaller and smallest problem - that's our base case.
// the problem is then written as the base case

// n! = n * (n - 1) * (n-2) * ... 1
//example
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 2 * 1 =6
// break into a simpler problem of the same form.
// to find the factorial of n, find the factorial of ____ and then do this _______
// factorial means  all the numbers multiplied together  from 1 to the number.
// example 1 * 2 * 3 = 6 
// simplest factorial : 1 is the factorial of 1
// base case - try to plug in base case and see what happens
const factorial = (n) => {
  // base case
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

