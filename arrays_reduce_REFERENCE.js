// Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.

  //reduce can reduce something into a value, another array, or an object

  //The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

  /*
  Parameters:
  callback: function to call on each element
      - callaback parameters:
          -accumulator (accumul;ates cb's return values)
          -currentValue (the current element being processed in array)
          -currentIndex (index being processed - starts at 0)
          -array (the array called upon)
  initial Value: Optional
    - value to use as 1st arg to the 1st call of cb.  
    - i.e. if you want accumulator to not start at 0

  Returns: 
    value resulting from reduction
  */
const arr = [ 100, 200, 300];

const reduce = (elements, cb, memo) => {
  let acc;
  let i;
  // if memo exists let i = memo, otherwise set to 0
  memo !== undefined ? acc = memo : acc = elements[0];
  acc === memo ? i = 0 : i = 1; 
  for (i; i < elements.length; i++) {
    acc = cb(acc, elements[i]);
  }
  return acc;
};

const sum = (acc, x) => {
  return  acc + x;
};

console.log(reduce(arr, sum)); 



