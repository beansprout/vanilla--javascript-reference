// filter function rewritten in native JS 

const arr = [
  { name: 'Frou Frou', species: 'cat' },
  { name: 'Hedgey', species: 'hedgehog' },
  { name: 'Ratatouille', species: 'rat' },
  { name: 'Chai Chu', species: 'guinea pig' },
  { name: 'Mr. Buttons', species: 'guinea pig' },
  { name: 'Nellins', species: 'cat' }
];

  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
const filter = (elements, cb) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    // callback function executes test (true or false)
    // if true add to result array
    if (cb(elements[i])) result.push(elements[i]);
  }
  return result;
};

//test functions
const isGuineaPig = (obj) => obj.species === 'guinea pig';
const isSnake = (obj) => obj.species === 'snake';

filter(arr, isGuineaPig);
console.log('filter(arr, isGuineaPig): ', filter(arr, isGuineaPig));

filter(arr, isSnake);
console.log('filter(arr, isSnake): ', filter(arr, isSnake));  // []

