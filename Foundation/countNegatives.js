//Write a function that returns the number of negative numbers in an array.

// function countNegatives(arr) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       count++;
//     }
//   }
//   return count;
// }

// let arr = [12, 23, -34, -56, 89];
// let result = countNegatives(arr);
// console.log(result);

function countNegatives(arr) {
  // is array or not
  if (!Array.isArray(arr)) {
    return false;
  }

  // empty array
  if (arr.length === 0) {
    return 0; // change from null to 0
  }

  // validate elements: must be finite numbers
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" || !Number.isFinite(arr[i])) {
      return false;
    }
  }

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

module.exports = { countNegatives };
