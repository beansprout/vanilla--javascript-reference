// check for undefined
const x = undefined;
//--use this to check if undefined -------------------
console.log(x === undefined); // true
//----------------------------------------------------

console.log(x); // undefined but might be undefined for a number of reasons.  use the above instead as a check.
// ===================================================

// check if array element is an array
const arr = [1, [2, 3]];
console.log(arr[0]); // 1 (returns the first element)
console.log(arr[0].length); // undefined - means NOT an array

//===================================================
//--use the following to check if an array element is NOT array:

console.log(arr[0].length === undefined) // true means NOT an array

console.log(arr[0].length > 0) // false means Not an array
//===================================================

//===================================================
// --- check if an array element IS an array:


// true means IS an array ( or object )


const obj = {animal: 'gorilla', heads: 1, hats: 0, fur: true};

console.log(obj.length > 0); // false
console.log(obj.length); //undefined
console.log(obj); //{ animal: 'gorilla', heads: 1, hats: 0, fur: true }





