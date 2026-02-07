// Remove duplicates from a sorted array in-place and return the number of unique elements.

// Constraints:
// Array is sorted in non-decreasing order.
// Do NOT use extra space.
// Modify array in-place.
// Return count of unique elements

var removeDuplicates = function (arr) {
  if (arr.length === 0) return 0;

  let x = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[x]) {
      x = x + 1;
      arr[x] = arr[i];
    }
  }

  return x + 1;
};
