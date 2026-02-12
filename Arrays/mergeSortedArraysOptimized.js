// Merge two sorted arrays in-place.

// You are given:
// nums1 of size m + n
// First m elements valid
// Last n elements = empty (0 placeholders)
// nums2 of size n
// Merge nums2 into nums1 as one sorted array in-place.

//Version 2 — Optimized In-Place (Better Approach)

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break;

    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
};
