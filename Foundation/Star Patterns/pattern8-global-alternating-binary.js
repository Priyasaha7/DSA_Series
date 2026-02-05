// Pattern 8: Triangle of Alternating 1s and 0s (Global Toggle)
// Toggle continues across rows.

let n = 4;
let toggle = 1;

for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j <= i; j++) {
    row += toggle + " ";
    toggle = toggle === 1 ? 0 : 1;
  }

  console.log(row);
}
