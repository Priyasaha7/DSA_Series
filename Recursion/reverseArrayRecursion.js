//Reverse an array using recursion (no loops allowed).

function reverseArray(arr, start, end) {
  if (start >= end) return;

  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;

  reverseArray(arr, start + 1, end - 1);
}

let arr = [1, 2, 3, 4];
reverseArray(arr, 0, arr.length - 1);
console.log(arr);
