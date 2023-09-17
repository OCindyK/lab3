/*
In JavaScript, the toString method is used to convert an object to a string representation. 
By default, when an object is converted to a String, it returns a string that looks something 
like [object Object]. 
However, we can define our own toString methods for custom objects to provide a more 
meaningful string representation.
*/

// a) Define a custom toString method for the Person object that will format and print their details
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}
/*
Person.prototype.toString = function () {
  return `${this.name}, ${this.age} years old, ${this.gender}`;
};

const person1 = new Person("James Brown", 73, "male");
console.log("person1: " + person1); // Output: person1: James Brown, 73 years old, male


console.log("");
console.log("=======================");
console.log("");


// b) Test your method by creating 2 different people using the below constructor function and printing them
const person2 = new Person("Frank Taylor", 45, "male"); // Output: person2: Frank Taylor, 45 years old, male
const person3 = new Person("Sam Eriksson", 28, "female"); // Output: person3: Sam Eriksson, 28 years old, female

console.log("person2: " + person2);
console.log("person3: " + person3);


console.log("");
console.log("=======================");
console.log("");


// c) Create a new constructor function Student that uses call to inherit from Person and add an extra property cohort
function Student(name, age, gender, cohort) {
  Person.call(this, name, age, gender);
  this.cohort = cohort;
}

Student.prototype.toString = function () {
  return `${Person.prototype.toString.call(this)}, ${this.cohort}`;
};

const student1 = new Student("Cat Lawrence", 20, "female", "CS101");

console.log("student1: " + student1); // Output: student1: Cat Lawrence, 20 years old, female, CS101


console.log("");
console.log("=======================");
console.log("");
*/

// d) Add a custom toString for Student objects that formats and prints their details. Test with 2 students.
function Student(name, age, gender, cohort) {
    Person.call(this, name, age, gender);
    this.cohort = cohort;
  }

Student.prototype.toString = function () {
    return `name: ${this.name}, age: ${this.age}, gender: ${this.gender}, cohort: ${this.cohort}`;
  };
  
  const student2 = new Student("Cat Lawrence", 20, "female", "CS101");
  const student3 = new Student("Enzo Jackson", 25, "male", "CS201");

  console.log("student2: " + student2); // Output: student2: name: Cat Lawrence, age: 20, gender: female, cohort: CS101
  console.log("student3: " + student3); // Output: student3: name: Enzo Jackson, age: 25, gender: male, cohort: CS201