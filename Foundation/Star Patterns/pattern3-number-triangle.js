// Pattern 3: Right-Angled Number Triangle
// Print a right-angled triangle of numbers of height n.

let n = 4;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += j + 1 + " ";
  }
  console.log(row);
}
