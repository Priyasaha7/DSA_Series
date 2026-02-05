// Pattern 6: Right-Aligned Right-Angled Star Triangle
// Stars aligned right using spaces.

let n = 4;

for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j < n - i - 1; j++) {
    row += "  ";
  }

  for (let k = 0; k <= i; k++) {
    row += "* ";
  }

  console.log(row);
}
