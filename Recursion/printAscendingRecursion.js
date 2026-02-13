// Print numbers from 1 to n using recursion.

// Rules:
// No loops allowed
// Must use recursion
// Print in ascending order

let n = 10;

function print(x) {
  if (x > n) return;

  console.log(x);
  print(x + 1);
}

print(1);
