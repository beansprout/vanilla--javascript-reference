  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  // note: find will only return the first value it finds.
const arr = [
  { name: 'Frou Frou', species: 'cat'},
  { name: 'Hedgey', species: 'hedgehog'},
  { name: 'Ratatouille', species: 'rat'},
  { name: 'Chai Chu', species: 'guinea pig'},
  { name: 'Mr. Buttons', species: 'guinea pig'},
  { name: 'Nellins', species: 'cat'}
];
  
const find = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i]))  {
      return elements[i];
    };
  }
  return undefined;
};

// test if species is a cat
const isCat = (x) => {
  if (x.species === 'cat') {
    return x;
  }
};
// log first cat
console.log(arr.find(isCat));


