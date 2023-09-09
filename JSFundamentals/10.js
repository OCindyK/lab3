/*
The following constructor function creates a new Person object with the given name and 
age values.
a) Create a new person using the constructor function and store it in a variable
b) Create a second person using different name and age values and store it in a separate 
variable
c) Print out the properties of each person object to the console
d) Rewrite the constructor function as a class called PersonClass and use it to create a 
third person using different name and age values. Print it to the console as well.
e) Add a canDrive method to both the constructor function and the class that returns true 
if the person is old enough to drive.

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
}
*/

/*
// a) New person using constructor functionfunction Person(name, age)
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
}

const person1 = new Person('Frank', 8);

console.log(person1);   // Output: Person { name: 'Frank', age: 8, human: true }


console.log("");
console.log("=======================");
console.log("");


// b) Second person using different name and age values
const person2 = new Person('Sam', 20);

console.log(person2);   // Output: Person { name: 'Sam', age: 20, human: true }


console.log("");
console.log("=======================");
console.log("");


// c) Print out the properties of each person object
console.log("Properties of person1:");
for (let property in person1) {
    console.log(`${property}: ${person1[property]}`);
}

console.log("");

console.log("Properties of person2:");
for (let property in person2) {
    console.log(`${property}: ${person2[property]}`);
}


console.log("");
console.log("=======================");
console.log("");


// d) Rewrite the constructor function as a class called PersonClass
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }
}

const person3 = new PersonClass('Eve', 22);

console.log("Properties of person3:");
for (let property in person3) {
    console.log(`${property}: ${person3[property]}`);
}


console.log("");
console.log("=======================");
console.log("");
*/

/*
// e) Add canDrive method to constructor function and the class
console.log("---Constructor---");
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;

    this.canDrive = function() {
    return this.age >= 16;
    };
}

const person1 = new Person('Frank', 8);
const person2 = new Person('Sam', 20);

console.log("Person 1 can drive: " + person1.canDrive());
// Output: Person 1 can drive: false

console.log("Person 2 can drive: " + person2.canDrive());
// Output: Person 1 can drive: true


console.log("");
*/

console.log("---Class---");
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }
    canDrive() {
        return this.age >= 16;
    }
}

const person1 = new PersonClass('Frank', 8);
const person2 = new PersonClass('Sam', 20);
const person3 = new PersonClass('Eve', 22);

console.log("Person 1 can drive: " + person1.canDrive());
// Output: Person 1 can drive: false

console.log("Person 2 can drive: " + person2.canDrive());
// Output: Person 1 can drive: true

console.log("Person 3 can drive: " + person3.canDrive());
// Output: Person 3 can drive: true