/*
Decimal number operations in JavaScript can lead to unexpected results, as in the 
following:

We can sometimes avoid this using the toFixed function to force the number of decimal 
places as below, but it’s not always useful

HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with 
different values as well as the below:

console.log(0.3 == currencyAddition(0.1, 0.2)) // true
console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true
*/

let twentyCents = 0.20
let tenCents = 0.10

console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`) 
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working?

console.log("");
console.log("===========");
console.log("");

// a) Explain why the above code returns the wrong answer
/* Because the toFixed method converts both twentyCents and tenCents into strings with two decimal places.
    By using the + operator, JS concatenate the two strings instead of performing numerical addition operation.
    Therefore, the result of the concatenation of the two strings is ‘0.20’ + ‘0.10’ = ‘0.200.10’.
    To perform actual numerical addition, we can covert the fixed strings back to numbers using:
*/
console.log("---parseFloat---");
let result1 = parseFloat(fixedTwenty) + parseFloat(fixedTen);
console.log(result1);    // Output: 0.30000000000000004

console.log("");

console.log("---unary plus operator---");
let result2 = +fixedTwenty + +fixedTen;
console.log(result2);   // Output: 0.30000000000000004


console.log("");
console.log("===========");
console.log("");


// b) Function currencyAddition(float1, float2) that adds the two decimal numbers float1 and float2
function currencyAddition(float1, float2) {
    const sum = parseFloat(float1) + parseFloat(float2);
    return sum.toFixed(2);
}

console.log(currencyAddition(0.1, 0.2));    // Output: 0.30


console.log("");
console.log("===========");
console.log("");


// c) Function currencyOperation(float1, float2, operation) that performs the given operation (either +, -, / or *) on the two numbers
function currencyOperation(float1, float2, operation) {
    float1 = parseFloat(float1);
    float2 = parseFloat(float2);

    switch(operation) {
        case '+':
            return (float1 + float2).toFixed(2);
        case '-':
            return (float1 - float2).toFixed(2);
        case '*':
            return (float1 * float2).toFixed(2);
        case '/':
            return (float1 / float2).toFixed(2);
        default:
            return 'Invalid operation';
    }
}

console.log(currencyOperation(0.1, 0.2, '+'));  // Output: 0.30
console.log(currencyOperation(0.1, 0.2, '-'));  // Output: -0.10
console.log(currencyOperation(0.1, 0.2, '*'));  // Output: 0.02
console.log(currencyOperation(0.1, 0.2, '/'));  // Output: 0.50
console.log(currencyOperation(0.1, 0.2, '='));  // Output: Invalid operation


console.log("");
console.log("===========");
console.log("");


// d) Extend the function to include a fourth argument numDecimals which allows the operation to support different amounts of decimal places from 1 to 10.
function currencyOperation1(float1, float2, operation, numDecimals) {
    float1 = parseFloat(float1);
    float2 = parseFloat(float2);

    const factor = Math.pow(10, numDecimals);

    switch(operation) {
        case '+':
            return (float1 + float2).toFixed(numDecimals);
        case '-':
            return (float1 - float2).toFixed(numDecimals);
        case '*':
            return (float1 * float2).toFixed(numDecimals);
        case '/':
            return (float1 / float2).toFixed(numDecimals);
        default:
            return 'Invalid operation';
    }
}

console.log(currencyOperation1(0.1, 0.000000002, '+', 10));   // Output: 0.1000000020
console.log(currencyOperation1(0.1, 0.2, '-', 10));           // Output: -0.1000000000
console.log(currencyOperation1(0.1, 0.002, '*', 10));         // Output: 0.0002000000
console.log(currencyOperation1(0.1, 0.0005, '/', 10));        // Output: 200.0000000000
console.log(currencyOperation1(0.1, 0.2, '=', 10));           // Output: Invalid operation

