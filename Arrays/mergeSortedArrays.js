// Merge two sorted arrays in-place.

// You are given:
// nums1 of size m + n
// First m elements valid
// Last n elements = empty (0 placeholders)
// nums2 of size n
// Merge nums2 into nums1 as one sorted array in-place.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
var merge = function (nums1, m, nums2, n) {
  let nCopy = nums1.slice(0, m);
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (p1 < m && nCopy[p1] < nums2[p2])) {
      nums1[i] = nCopy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
};
