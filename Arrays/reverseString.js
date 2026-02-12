// Reverse a character array in-place.

// Constraints:
// Modify the input array directly.
// Do NOT use extra memory.
// Return nothing.

/**
 * @param {character[]} s
 * @return {void}
 */
var reverseString = function (s) {
  let len = s.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    let temp = s[i];
    s[i] = s[len - 1 - i];
    s[len - 1 - i] = temp;
  }
};
