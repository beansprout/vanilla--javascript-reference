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

const isGuineaPig = (obj) => obj.species === 'guinea pig';

filter(arr, isGuineaPig);
console.log('filter(arr, isGuineaPig): ', filter(arr, isGuineaPig));


/* eslint-disable no-undef */ // Remove this comment once you write your classes.


// Create a class called `Animal` and a class called `Cat`.
// `Cat` should extend the `Animal` class.
// Animal and Cat should both have a parameter called `options` in their constructors.
// Animal should have the property `age` that's set in the constructor and the method
// `growOlder` that returns the age.
// Cat should have the property `name` that is set in the constructor and the method
// `meow` that should return the string `<name> meowed!` where `<name>` is the `name`
// property set on the Cat instance.
