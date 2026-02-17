// Given a string s, check whether it is a palindrome using recursion.

// Palindrome = same forward and backward.

function isPalindrome(s, start, end) {
  if (start >= end) return true;

  if (s[start] !== s[end]) return false;

  return isPalindrome(s, start + 1, end - 1);
}

let str = "madam";
console.log(isPalindrome(str, 0, str.length - 1));
