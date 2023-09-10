/*
Create a function that takes a string as a parameter and returns the string with the first 
character of each word changed into a capital letter, as in the example below. Test it with 
different strings.
*/

function ucFirstLetters(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

console.log(ucFirstLetters("los angeles"))      // Output: Los Angeles
console.log(ucFirstLetters("new york"))         // Output: New York
console.log(ucFirstLetters("san francisco"))    // Output: San Francisco
