// Assignment 4:
// Write a JavaScript function that takes a string as a parameter and determines 
// whether it's a palindrome or not. A palindrome is a word, phrase, number, or other 
// sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, 
// and capitalization).

function isPalindrome(str) {
    // Remove spaces, punctuation, and convert to lowercase
    const cleanedStr = str.replace(/[^\w]/g, "").toLowerCase();

    // Compare the cleaned string with its reverse
    const reversedStr = cleanedStr.split("").reverse().join("");

    return cleanedStr === reversedStr;
}

// Example usage
const inputString = "A man, a plan, a canal, Panama!";
const result = isPalindrome(inputString);

if (result) {
    console.log(`"${inputString}" is a palindrome.`);
} else {
    console.log(`"${inputString}" is not a palindrome.`);
}
