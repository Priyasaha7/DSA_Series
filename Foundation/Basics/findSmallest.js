// Write a function that returns the smallest number in an array

function findSmallest(arr) {
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
