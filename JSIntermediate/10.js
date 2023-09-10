/*
The following code uses the Date object to print the current time and the number of hours 
that have passed today so far. Extend the code to do the following:
*/

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
// Output: Current time is 2:18:55 pm

console.log(today.getHours() + ' hours have passed so far today')
// Output: 14 hours have passed so far today

// a) Print the total number of minutes that have passed so far today
console.log("a) Print the total minutes:");
const totalMinutesPassed = today.getHours() * 60 + today.getMinutes();
console.log(totalMinutesPassed + ' minutes have passed today');
// Output: 858 minutes have passed today


console.log("");
console.log("=============");
console.log("");


// b) Print the total number of seconds that have passed so far today
console.log("a) Print the total seconds:");
const totalSecondsPassed = totalMinutesPassed * 60 + today.getSeconds();
console.log(totalSecondsPassed + ' seconds have passed today');
// Output: 51700 seconds have passed today


console.log("");
console.log("=============");
console.log("");


// c) Calculate and print your age as: 'I am x years, y months and z days old'
console.log("Calculate and print age");
const today1 = new Date();

const birthdate = new Date('1996-10-10');
const ageInMilliseconds = today1 - birthdate;

const millisecondsPerYear = 3.15576e10;
const millisecondsPerMonth = 2.63e9;

const years = Math.floor(ageInMilliseconds / millisecondsPerYear);
const months = Math.floor((ageInMilliseconds % millisecondsPerYear) / millisecondsPerMonth);
const days = Math.floor((ageInMilliseconds % millisecondsPerMonth) / (24 * 60 *60 * 1000));

console.log(`I am ${years} years, ${months} months, and ${days} days old.`);
// Output: I am 26 years, 10 months, and 29 days old.


console.log("");
console.log("=============");
console.log("");


// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount of days in between the two given dates
function daysInBetween(date1, date2) {
    const oneDayMilliseconds = 24 * 60 * 60 * 1000;

    const timeDifference = Math.abs(date2 - date1);
    const days1 = Math.floor(timeDifference / oneDayMilliseconds);

    return days1;
}

const startDate = new Date ('1905-03-10');
const endDate = new Date ('1992-08-21');
const daysBetween = daysInBetween(startDate, endDate);
console.log(`There are ${daysBetween} days between the two dates.`);
// Output: There are 31941 days between the two dates.