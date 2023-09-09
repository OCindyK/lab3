/*
Use the following variables to understand how JavaScript stores objects by reference.
a) Create a new moreSports variable equal to teamSports and add some new sport 
values to it (using push and unshift)
b) Create a new dog2 variable equal to dog1 and give it a new value
c) Create a new cat2 variable equal to cat1 and change its name property
d) Print the original teamSports, dog1 and cat1 variables to the console. Have they 
changed? Why?
e) Change the way the moreSports and cat2 variables are created to ensure the 
originals remain independen

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };
*/
/*
// a) New moreSports
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];

let moreSports = teamSports;
moreSports.push('Football', 'Basketball');  // Add new sports to the end
moreSports.unshift('Badminton');            // Add a new sport to the beginning

console.log("More Sports:")
console.log(moreSports);    // Output: [ 'Badminton', 'Hockey', 'Cricket', 'Volleyball', 'Football', 'Basketball' ]


console.log("");
console.log("================");
console.log("");


// b) New dog2
let dog1 = 'Bingo';

let dog2 = dog1;
dog2 = 'River';

console.log("Dog2:");
console.log(dog2);  // Output: River


console.log("");
console.log("================");
console.log("");


// c) New cat2
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

let cat2 = cat1;
cat2.name = 'Whiskers';

console.log("Cat2:");
console.log(cat2);  // Output: { name: 'Whiskers', breed: 'Siberian' }


console.log("");
console.log("================");
console.log("");


// d) Print the original teamSports, dog1 and cat1
console.log("Original variables:")
console.log(teamSports);    // Output: [ 'Badminton', 'Hockey', 'Cricket', 'Volleyball', 'Football', 'Basketball' ]
console.log(dog1);          // Output: Bingo
console.log(cat1);          // Output: { name: 'Whiskers', breed: 'Siberian' }

/*
Why some variables properties have changed?
teamSports array has changed because the moreSports variable references the same array as teamSports.
    So when moreSports array is modified, the teamSports array is affected.
dog1 variable has not changed because strings are immutable, so changes to dog2 do not affect dog1.
cat1 object has changed because both cat1 and cat2 reference the same object.
    Modifying the name property of cat2 affects the name property of cat1.
*/


console.log("");
console.log("================");
console.log("");


// e) Change moreSports and cat2 variables so the originals remain independent
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

let moreSports = teamSports.slice();    // Create shallow copy of the array
moreSports.push('Football', 'Basketball');
moreSports.unshift('Badminton');

let dog2 = dog1;
dog2 = 'River';

let cat2 = { ...cat1};                  // Create shallow copy of the object
cat2.name = 'Whiskers';

console.log("-Original variables-");
console.log(teamSports);    // Output: [ 'Hockey', 'Cricket', 'Volleyball' ]
console.log(dog1);          // Output: Bingo
console.log(cat1);          // Output: { name: 'Fluffy', breed: 'Siberian' }

console.log("");

console.log("-New variables-");
console.log(moreSports);    // Output: [ 'Badminton', 'Hockey', 'Cricket', 'Volleyball', 'Football', 'Basketball' ]
console.log(dog2);          // Output: River
console.log(cat2);          // Output: { name: 'Whiskers', breed: 'Siberian' }