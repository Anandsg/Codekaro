// Assignment 1:
// Write a JavaScript function that takes a number as a parameter and 
// prints whether it's positive, negative, or zero.

function checkNumber() {
    var input = prompt("Enter a number:");
    var number = parseFloat(input);

    if (isNaN(number)) {
        console.log("Invalid input. Please enter a valid number.");
    } else if (number > 0) {
        console.log("The number is positive.");
    } else if (number < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}

checkNumber()