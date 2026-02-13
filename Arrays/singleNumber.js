// Find the element that appears only once in an array where every other element appears exactly twice.

// Constraints:
// Must run in linear time ideally
// Prefer constant extra space (optimized version)

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === 1) {
      return nums[i];
    }
  }
};
