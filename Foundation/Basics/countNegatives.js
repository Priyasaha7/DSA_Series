//Write a function that returns the number of negative numbers in an array.

function countNegatives(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

let arr = [12, 23, -34, -56, 89];
let result = countNegatives(arr);
console.log(result);
