// Print all even numbers from 1 to n using recursion.

function printEven(x, n) {
  if (x > n) return;

  if (x % 2 === 0) {
    console.log(x);
  }

  printEven(x + 1, n);
}

printEven(1, 10);
