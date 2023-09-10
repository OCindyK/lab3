/*
Given the below salaries object, perform the following tasks.
*/

let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
};

// a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
function sumSalaries(salaries) {
    let total = 0;
    for(let salary of Object.values(salaries)) {
        total += salary;
    }
    return total;
}

const totalSalaries = sumSalaries(salaries);
console.log(totalSalaries); // Output: 233000


console.log("");
console.log("==================");
console.log("");


// b) Write a function topEarner(salaries) that calculates and returns the name of the person earning the highest salary
function topEarner(salaries) {
    let highestSalary = 0;
    let topEarnerName = '';

    for(let [name, salary] of Object.entries(salaries)) {
        if(salary > highestSalary) {
            highestSalary = salary;
            topEarnerName = name;
        }
    }
    return topEarnerName;
}

const highestEarner = topEarner(salaries);
console.log(highestEarner); // Output: Christina