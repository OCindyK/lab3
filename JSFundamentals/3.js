/*
3. Which of the following console.log messages will print? Why?
*/

if (0) console.log('#1 zero is true')
// Condition 0 is considered false in JS. The console.log statement will not be executed.

if ("0") console.log('#2 zero is true')
// Condition “0” is a non-empty string, and all non-empty strings are considered true in JS. The console.log statement will be executed.

if (null) console.log('null is true')
// Condition null is considered false in JS. The console.log statement will not be executed.

if (-1) console.log('negative is true')
// Condition -1 is a non-zero number, and all non-zero numbers are considered true in JS. The console.log statement will be executed.

if (1) console.log('positive is true')
// Condition 1 is a non-zero number, and all non-zero numbers are considered true in JS. The console.log statement will be executed.
