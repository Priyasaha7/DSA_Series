//Write a function secondLargest(arr) that returns the second largest distinct number in an array.

// function secondLargestNumber(arr) {
//   if (!Array.isArray(arr)) {
//     return false;
//   }

//   if (arr.length < 2) {
//     return null;
//   }

//   let x = -Infinity;
//   let y = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== "number" || !Number.isFinite(arr[i])) {
//       return false;
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > x) {
//       y = x;
//       x = arr[i];
//     } else if (arr[i] > y && arr[i] !== x) {
//       y = arr[i];
//     }
//   }

//   if (y === -Infinity) {
//     return null;
//   }

//   return y;
// }

//LEETCODE

//Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist. An alphanumeric string is a string consisting of lowercase English letters and digits.

var secondHighest = function (s) {
  let max = -1;
  let second = -1;
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];

    if (ch >= "0" || ch <= "9") {
      let num = Number(ch);

      if (num > max) {
        second = max;
        max = num;
      } else if (num > second && num !== max) {
        second = num;
      }
    }
  }
  return second;
};
