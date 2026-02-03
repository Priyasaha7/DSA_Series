// Write a function that returns the largest number in an array

function findLargest(arr) {
  let x = arr[0]; // dont keep x=-1, what if the arr contains all negative numbers
  // let x= -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > x) {
      x = arr[i];
    }
  }
  return x;
}

let arr = [12, 22, 56, 11, 89, 0, 67];

let result = findLargest(arr);

console.log(result);
