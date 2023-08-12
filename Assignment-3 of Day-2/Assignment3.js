// Assignment 3:
// Write a JavaScript function that takes two numbers as parameters and returns the larger one.

function findLargerNumber(num1, num2) {
    return num1 > num2 ? num1 : num2;
  }
  
  // Example usage
  const number1 = 10;
  const number2 = 7;
  const largerNumber = findLargerNumber(number1, number2);
  console.log(`The larger number between ${number1} and ${number2} is ${largerNumber}`);
  