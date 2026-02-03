//Write a function that accepts a number and checks whether it is Even or Odd. If the number is divisble by 2, it’s an Even number. Otherwise, it’s an Odd number. Test the function with inputs 18 and 5.

function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
}
checkEvenOrOdd(18);
checkEvenOrOdd(5);

// Write a program that accepts a number (age) and checks whether the person is eligible to vote. A person is eligible if their age is 18 or more.
let age = 20;
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}
