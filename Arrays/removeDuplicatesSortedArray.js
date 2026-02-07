// Remove duplicates from a sorted array in-place and return the number of unique elements.

// Constraints:
// Array is sorted in non-decreasing order.
// Do NOT use extra space.
// Modify array in-place.
// Return count of unique elements

var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let x = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[x]) {
      x++;
      nums[x] = nums[i];
    }
  }

  return x + 1;
};
