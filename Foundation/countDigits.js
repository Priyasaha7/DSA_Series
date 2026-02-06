// Count the number of digits in an integer n.

// The number may be positive, negative, or zero.

// Return the total count of digits.

function countDigits(n) {
  if (n === 0) return 1;

  let count = 0;
  n = Math.abs(n);

  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }

  return count;
}

const n = 0;
console.log(countDigits(n));
