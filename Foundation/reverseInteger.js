// Reverse digits of a 32-bit signed integer.

// If reversing x causes it to go outside the signed 32-bit range

// −2^31 𝑡𝑜 2^31−1 , return 0.

// Negative numbers should keep their sign.

var reverse = function (x) {
  let sign = x < 0 ? -1 : 1;
  x = Math.abs(x);

  let rev = 0;

  while (x > 0) {
    let last = x % 10;
    rev = rev * 10 + last;
    x = Math.floor(x / 10);
  }

  rev *= sign;

  const limit = Math.pow(2, 31);
  if (rev < -limit || rev > limit - 1) {
    return 0;
  }

  return rev;
};
