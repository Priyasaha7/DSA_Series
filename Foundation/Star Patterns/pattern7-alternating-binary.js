// Pattern 7: Triangle of Alternating 1s and 0s
// Toggle resets each row.

let n = 4;

for (let i = 0; i < n; i++) {
  let row = "";
  let toggle = 1;

  for (let j = 0; j <= i; j++) {
    row += toggle + " ";
    toggle = toggle === 1 ? 0 : 1;
  }

  console.log(row);
}
