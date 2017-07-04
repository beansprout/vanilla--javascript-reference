//array for testing
const arr = [
  { name: 'Frou Frou', species: 'cat'},
  { name: 'Hedgey', species: 'hedgehog'},
  { name: 'Ratatouille', species: 'rat'},
  { name: 'Chai Chu', species: 'guinea pig'},
  { name: 'Mr. Buttons', species: 'guinea pig'},
  { name: 'Nellins', species: 'cat'}
];

const arr2 = ['apple', 'banada', 'pear', 'hat'];

// each: similar to forEach built-in array method

// Iterates over a list of elements, yielding each in turn to the `cb` function and keeps a count of the iterations.
  // This only needs to work with arrays.
  
  // based off http://underscorejs.org/#each
  
const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i]);
  }
};

const cb = (x) => x.type = 'animal';

each(arr, cb);

console.log(arr);

//----------map-------------------------


