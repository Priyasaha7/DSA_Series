// Print numbers from n to 1 using recursion.

// Rules:
// Use recursion only (no loops).
// Print numbers in descending order.

function print(n) {
  if (n === 0) return;

  console.log(n);
  print(n - 1);
}

print(10);
