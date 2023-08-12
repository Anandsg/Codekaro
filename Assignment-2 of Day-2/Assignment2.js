// Assignment 2:
// Write a JavaScript function that takes a positive integer as a parameter and 
// calculates its factorial using a for loop. The factorial of a number N is the 
// product of all positive integers less than or equal to N.


function factorialNum(n) {
    if (n < 0) {
      return "Factorial is not possible for negative numbers.";
    } else if (n === 0 || n === 1) {
      return 1; // Factorial of 0 and 1 is 1
    } else {
      let factorial = 1;
      for (let i = 2; i <= n; i++) {
        factorial *= i;
      }
      return factorial;
    }
  }
  
  // Example usage
  const number = 5;
  const factorialResult = factorialNum(number);
  console.log(`Factorial of ${number} is ${factorialResult}`);
  