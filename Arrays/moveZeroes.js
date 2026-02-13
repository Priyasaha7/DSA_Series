// Move all zeroes in an array to the end while maintaining the relative order of non-zero elements.

// Constraints:
// Modify array in-place
// Do not use extra space
// Order of non-zero elements must remain same

/**
 * @param {number[]} nums
 * @return {void}
 */
var moveZeroes = function (nums) {
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }

  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }
};
