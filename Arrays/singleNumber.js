// Find the element that appears only once in an array where every other element appears exactly twice.

// Constraints:
// Must run in linear time ideally
// Prefer constant extra space (optimized version)

/**
 * @param {number[]} nums
 * @return {number}
 */

//Version 1 — HashMap Approach
// var singleNumber = function (nums) {
//   let hash = {};

//   for (let i = 0; i < nums.length; i++) {
//     if (!hash[nums[i]]) {
//       hash[nums[i]] = 1;
//     } else {
//       hash[nums[i]]++;
//     }
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (hash[nums[i]] === 1) {
//       return nums[i];
//     }
//   }
// };
// -----------------------------------------------------------------------------------------------

//Version 2 — Optimized XOR Approach

var singleNumber = function (nums) {
  let xor = 0;

  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
  }

  return xor;
};
