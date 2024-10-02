// In JavaScript, if...else statements are used to execute different blocks of code based on a condition.

const age = 61;

// if (age >= 18) {
//   console.log("You are adult");
// } else {
//   console.log("You are too young");
// }

if (age < 18) {
  console.log("You are too young");
} else if (age <= 60) {
  console.log("You are adult");
} else {
  console.log("You are senior");
}

// Exercise

// 1. Declare a variable for number
// 2. Build grading based upon the score

// Score - 90 - 100 : A
// Score - 80 -  89 : B
// Score - 70 -  79 : C
// Score - 60 -  69 : D
// Score -  0 -  59 : F

// 1. Declare a variable for number
let score = 100; // Change this value to test different scores

// 2. Build grading based upon the score
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else if (score >= 0) {
  console.log("Grade: F");
} else {
  console.log("Invalid score.");
}
