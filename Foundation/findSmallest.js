// Write a function that returns the smallest number in an array

function findSmallest(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }

  // empty array
  if (arr.length === 0) {
    return null; // change from null to 0
  }

  // validate elements: must be finite numbers
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" || !Number.isFinite(arr[i])) {
      return false;
    }
  }
  let x = Infinity;
  //let x = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < x) {
      x = arr[i];
    }
  }
  return x;
}

let arr = [12, 22, 56, 11, 89, 5, 67, -9];

let result = findSmallest(arr);

console.log(result);
