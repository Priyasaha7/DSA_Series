// Write a function that takes a number and returns the sum of its digits.

function sumOfDigits(arr) {
  arr = Math.abs(arr); // handle negative numbers
  let sum = 0;

  while (arr > 0) {
    sum += arr % 10;
    arr = Math.floor(arr / 10);
  }

  return sum;
}

console.log(sumOfDigits(1234));
