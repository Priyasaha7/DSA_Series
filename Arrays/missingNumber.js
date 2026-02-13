// Find the missing number in an array containing numbers from 0 to n.

// Rules:
// Array has n distinct numbers from 0…n
// Exactly one number is missing
// Return the missing number

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let n = nums.length;
  let totalSum = (n * (n + 1)) / 2;

  let partialSum = 0;
  for (let i = 0; i < n; i++) {
    partialSum += nums[i];
  }

  return totalSum - partialSum;
};
