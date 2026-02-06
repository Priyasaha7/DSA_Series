// Check whether a given integer x is a palindrome number.

// A number is palindrome if it reads the same forward and backward.

// Negative numbers are NOT palindrome.

var isPalindrome = function (x) {
  if (x < 0) return false;

  let rev = 0;
  let original = x;

  while (x > 0) {
    let rem = x % 10;
    rev = rev * 10 + rem;
    x = Math.floor(x / 10);
  }

  return rev === original;
};
