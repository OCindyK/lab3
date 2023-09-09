/*
2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them?
*/
let three = "3";
let four = "4";
let thirty = "30";

// Addition
let addition = three + four;
console.log("Addition:", addition); // Output: "34"
// Concatenating the strings “3” and “4”.

// Multiplication
let multiplication = three * four;
console.log("Multiplication:", multiplication); // Output: 12

// Division
let division = three / four;
console.log("Division:", division); // Output: 0.75

// Subtraction
let subtraction = three - four;
console.log("Subtraction:", subtraction); // Output: -1

// First Less Than
let lessThan1 = three < four;
console.log("First Less Than:", lessThan1); // Output: true

// Second Less Than
let lessThan2 = thirty < four;
console.log("Second Less Than 2:", lessThan2); // Output: true
/*
Comparing the string “30” and the string “4”.
JS will perform lexicographic (dictionary-style) comparison between the strings. Since 30 comes after 4 in lexicographic order, the result will be false.
*/


/*
The expressions that are not giving the expected results are the following:
let addition = three + four = 34
let lessThan2 = thirty < four = true
Convert the strings to numbers using parseInt or parseFloat
*/

// Addition
let addition1 = parseInt(three) + parseInt(four);
console.log("Parsed Addition: " + addition1);

// Second Less than
let lessThan3 = parseInt(thirty) < parseInt(four);
console.log("Parsed Second Less Than: " + lessThan3);

