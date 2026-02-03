// Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1

function searchElement(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
}

let arr = [12, 23, 34, 56, 89];

let result = searchElement(arr, 48);

console.log(result);
