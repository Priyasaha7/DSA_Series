// Find the maximum number of consecutive 1s in a binary array.

// Given a binary array nums:
// Return the longest continuous sequence of 1s.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let currCount = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currCount++;
      maxCount = Math.max(maxCount, currCount);
    } else {
      currCount = 0;
    }
  }

  return maxCount;
};
