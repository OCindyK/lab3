/*
The following car object has several properties and a method which uses them to print a 
description. When calling the function normally this works as expected, but using it from 
within setTimeout fails. Why?
let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};

car.description(); //works
setTimeout(car.description, 200); //fails
*/

console.log(
  "The setTimeout call fails because 'this' keyword does not refer to the 'car' object."
);

console.log("");
console.log("=======================");
console.log("");

// a) Fix the setTimeout call by wrapping car.description inside a function
let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};

car.description();

setTimeout(() => car.description(), 200);


console.log("");
console.log("=======================");
console.log("");


// b) Create a clone of the original car and override the year
let newCar = Object.assign({}, car, { year: 2022 });

newCar.description = function () {
  console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
};

console.log("Original car's description:");
car.description();
console.log("");
console.log("New car's description with updated year:");
newCar.description();


console.log("");
console.log("=======================");
console.log("");


// c) Does the delayed description() call use the original values or the new values from b? Why?
/*
The delayed 'description()' call uses the original values from the 'car' object because
the 'setTimeout' call inside the 'car.description' does not have access to the 'newCar' object.
*/

// d) Use bind to fix the description method so that it can be called from within setTimeout without a wrapper function
console.log("Car's description using bind called from setTimeout:");
newCar.description = car.description.bind(newCar);
setTimeout(newCar.description, 200);


console.log("");
console.log("=======================");
console.log("");


// e) Change another property of the car by creating a clone and overriding it, and test that setTimeout still uses the bound value from d
let anotherCar = Object.assign({}, newCar, { year: 2023 });

setTimeout(anotherCar.description, 500);
