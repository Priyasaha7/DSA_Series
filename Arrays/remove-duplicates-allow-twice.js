// Given a sorted array nums, remove duplicates in-place such that:

// 👉 Each element can appear at most twice.
// 👉 Return the number of remaining elements k.
// 👉 First k elements should contain the valid values.

var removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length;

  let x = 2;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[x - 2]) {
      nums[x] = nums[i];
      x++;
    }
  }

  return x;
};
