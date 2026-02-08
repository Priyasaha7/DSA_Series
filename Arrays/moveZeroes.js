// Problem:
// Given an integer array nums, move all 0s to the end while maintaining the relative order of non-zero elements.

// Rules:
// Must do it in-place (no extra array).
// Return nothing — modify array directly.

var moveZeroes = function (arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[x] = arr[i];
      x = x + 1;
    }
  }

  while (x < arr.length) {
    arr[x] = 0;
    x = x + 1;
  }
};
