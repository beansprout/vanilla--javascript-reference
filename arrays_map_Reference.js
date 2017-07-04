//array for testing
const arr = [2, 4, 8, 16];

// Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
const map = (elements, cb) => {
  let result = [];
  for (let i = 0; i < elements.length; i++) {
    result.push(cb(elements[i]));
  } 
  return result;
};

// function that doubles x
const doubler = (x) => x*2;

// this will use the map function to double every element
const newArr = map(arr, doubler);

console.log(newArr);

