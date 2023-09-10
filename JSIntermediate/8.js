/*
The following code creates a new Map object for storing names beginning with A, B, or C 
with their phone numbers.
*/

const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343') 
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

// a) Create a new phoneBookDEF Map to store names beginning with D, E or F
const phoneBookDEF = new Map();

const detailsDEF = [
    [ 'Ben', '0412356789' ],
    [ 'Magda', '0498765432' ],
    [ 'Cat', '0401235789' ],
];

for (const [name, phoneNumber] of detailsDEF) {
    phoneBookDEF.set(name, phoneNumber);
}

console.log(phoneBookDEF);
/* Output:
Map(3) {
  'Ben' => '0412356789',
  'Magda' => '0498765432',
  'Cat' => '0401235789'
}
*/


console.log("");
console.log("===================");
console.log("");


// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
const phoneBookDEF1 = new Map ([
    [ 'Ben', '0412356789' ],
    [ 'Magda', '0498765432' ],
    [ 'Cat', '0401235789' ],
]);

console.log(phoneBookDEF1);
/* Output:
Map(3) {
  'Ben' => '0412356789',
  'Magda' => '0498765432',
  'Cat' => '0401235789'
}
*/


console.log("");
console.log("===================");
console.log("");


// c) Update the phone number for Caroline
phoneBookABC.set('Caroline', '0444557775');

console.log(phoneBookABC);
/* Output:
Map(3) {
  'Annabelle' => '0412312343',
  'Barry' => '0433221117',
  'Caroline' => '0444557775'
}
*/


console.log("");
console.log("===================");
console.log("");


// d) Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map
function printPhoneBook(contacts) {
    for(const [name, phoneNumber] of contacts.entries()) {
        console.log(`${name}: ${phoneNumber}`);
    }
}

printPhoneBook(phoneBookABC);
printPhoneBook(phoneBookDEF);
/* Output:
Annabelle: 0412312343
Barry: 0433221117
Caroline: 0444557775
Ben: 0412356789
Magda: 0498765432
Cat: 0401235789
*/

console.log("");
console.log("===================");
console.log("");


// e) Combine the contents of the two individual Maps into a single phoneBook Map
const phoneBook = new Map ([ ...phoneBookABC, ...phoneBookDEF]);

console.log(phoneBook);
/* Output:
Map(6) {
  'Annabelle' => '0412312343',
  'Barry' => '0433221117',
  'Caroline' => '0444557775',
  'Ben' => '0412356789',
  'Magda' => '0498765432',
  'Cat' => '0401235789'
}
*/


console.log("");
console.log("===================");
console.log("");


// f) Print out the full list of names in the combined phone book
for(const name of phoneBook.keys()) {
    console.log(name);
}

/* Output:
Annabelle
Barry
Caroline
Ben
Magda
Cat
*/
