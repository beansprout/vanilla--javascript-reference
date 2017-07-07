
const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  const flattened = [];
  const str = elements.join();
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ',') {
      flattened.push(str[i]);
    }
  }
  return flattened; // returns an array of strings...
};
console.log(flatten([1, [2], [3, [[4]]]]));

const flatten2= (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  const flattened = [];
};

console.log(flatten([1, [2], [3, [[4]]]]));

//------------------------------
// flatten 
//steps
// 1 - to flatten an array, first flatten each nested array and concatenate alll the elements
// 2- the base calse is when the array is allready flat 
// 2 cases - elements, and arrays
// case 1 - element - if an element can just push onto newArr
// case 2 - array of elements
// case 3 - array of nested arrays
// when you say I wish I could just reapply the code I've already written to this case that's a sign that you should use recursion.

//if (elem is an array) {
  const flatten = (elements) {
  if (Array.isArray(elem)) {
    const nestedArray = flatten(elem(
    each(nestedArray, (nestedElem) => {
      // result.push(nestedElem);
      result =result.concat(nestedArray);
    });
  } else {
    result.push(elem);
  });
  return result;
