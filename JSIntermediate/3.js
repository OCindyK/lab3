/*
Use the following animals array for the below tasks. Test each one by printing the result to 
the console. Review the following link for tips:
https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

// a) Add 2 new values to the end
const animals = ['Tiger', 'Giraffe']

animals.push('Owl', 'Wolf');
console.log(animals)    // Output: [ 'Tiger', 'Giraffe', 'Owl', 'Wolf' ]


console.log("");
console.log("====================");
console.log("");


// b) Add 2 new values to the beginning
animals.unshift('Lion', 'Kangaroo');
console.log(animals);   // Output: [ 'Lion', 'Kangaroo', 'Tiger', 'Giraffe', 'Owl', 'Wolf' ]


console.log("");
console.log("====================");
console.log("");


// c) Sort the values alphabetically
animals.sort();
console.log(animals);   // Output: [ 'Giraffe', 'Kangaroo', 'Lion', 'Owl', 'Tiger', 'Wolf' ]


console.log("");
console.log("====================");
console.log("");


// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue
function replaceMiddleAnimal(newValue) {
    const middleIndex = Math.floor(animals1.length / 2);
    animals1 = [
        ...animals1.slice(0, middleIndex),
        newValue,
        ...animals1.slice(middleIndex + 1)
    ];
}

let animals1 = ['Giraffe', 'Kangaroo', 'Lion', 'Owl', 'Tiger', 'Wolf'];
replaceMiddleAnimal('Panda');

console.log(animals1);  // Output: [ 'Giraffe', 'Kangaroo', 'Lion', 'Panda', 'Tiger', 'Wolf' ]


console.log("");
console.log("====================");
console.log("");


// e) Write a function findMatchingAnimals(beginsWith) that returns a new array containing all the animals that begin with the beginsWith string.
function findMatchingAnimals(beginsWith) {
    beginsWith = beginsWith.toLowerCase();
    return animals.filter(animal => animal.toLowerCase().startsWith(beginsWith));
}

let matchingAnimals = findMatchingAnimals('k');
console.log(matchingAnimals);   // Output: [ 'Kangaroo' ]