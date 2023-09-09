/*
The object below represents a single city.
a) Write a function that takes an object as an argument and uses a for…in loop to access 
and print to the console each of those object properties and their values. Test it using 
the sydney object below.
b) Create a new object for a different city with different properties and call your function 
again with the new object.

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}
*/

// a) sydney object with for...in loop
function printObjectProperties(city) {
    for (let key in city) {
        console.log(`${key}: ${city[key]}`);
    }
}

// Test the function with the sydney object
const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
};

console.log("-Sydney Object-")
printObjectProperties(sydney);

/* Output:
- Sydney Object-
name: Sydney
population: 5121000
state: NSW
founded: 26 January 1788
timezone: Australia/Sydney
*/

console.log("");

// b) New object for a different city with different properties
const melbourne = {
    name: 'Melbourne',
    population: 5_078_193,
    state: 'Victoria',
    founded: '30 August 1835',
    timezone: 'Australia/Melbourne'
};

console.log("-Melbourne Object-");
printObjectProperties(melbourne);
/* Output:
-Melbourne Object-
name: Melbourne
population: 5078193
state: Victoria
founded: 30 August 1835
timezone: Australia/Melbourne
*/