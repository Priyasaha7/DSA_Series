// Remove all occurrences of a given value val from an array in-place and return the new length.

// Constraints:
// Do not use extra array space.
// Order of elements can change.
// Elements beyond returned length don’t matter.

var removeElement = function (arr, val) {
  let x = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[x] = arr[i];
      x = x + 1;
    }
  }

  return x;
};
