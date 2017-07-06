// const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

const arr = [1, [2], [3, [[4]]]];
  
const flatten = (elements, cb) => {
    return elements.reduce(cb);
  }

const cb = (x) => {
  const newArr = [];
  let i;
    if (x.length === undefined) {
      console.log(`x.length is undefined`);
      newArr.push(x);
    } 
    else {
       while (x.length) {
         
      newArr.push(x[0]);
      // x.splice(0, 1);
      i++;
      console.log(i, `x {x}`);
       };
    }
    return newArr;
  }

const flattened = flatten(arr, cb);
console.log(flattened);
