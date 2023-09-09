/*
Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a
and b. What does the ‘+=’ do?

let a = 2, b = 3;
let result = `${a} + ${b} is `;

if (a + b < 10) {
    result += 'less than 10';
} else {
    result += 'greater than 10';
}

*/

let a = 8, b = 3;
let result = `${a} + ${b} is `;

result += (a + b < 10) ? 'less than 10' : 'greater than 10';

console.log(result);

// The operator +=  is a shorthand for concatenating and assigning values to a variable.
// It is often used to add a value to an existing value and then store the result back in the same variable.
