/*
a) Complete the inigo object by adding a lastName property and including it in the greeting. 
b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead 
prints his famous catch phrase to the console. HINT: see https://www.imdb.com/title/tt0093779/characters/nm0001597.
c) Update getCatchPhrase to use arrow function syntax and a conditional operator.

const westley = {
    name: 'Westley',
    numFingers: 5
    }
    const rugen = {
    name: 'Count Rugen',
    numFingers: 6
    }
    const inigo = {
    firstName: 'Inigo',
    greeting(person) { 
    let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
    console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
    return 'Nice to meet you.';
    }
    }
    inigo.greeting(westley)
    inigo.greeting(rugen)
*/

/*
// a) Adding lastName property
const westley = {
    name: 'Westley',
    numFingers: 5
    }
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
    }

const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
        return 'Nice to meet you.';
    }
};

inigo.greeting(westley);    // Output: Hello Westley, my name is Inigo Montoya. Nice to meet you.
inigo.greeting(rugen);      // Output: Hello Count Rugen, my name is Inigo Montoya. Nice to meet you.
*/

// b) getCatchPhrase with argument of 6 fingers prints the famous catch phrase 
const westley = {
    name: 'Westley',
    numFingers: 5
    }
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
    }

const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
        if (person.numFingers === 6) {
            return 'You have a great gift for rhyme.';
        } else {
            return 'Give us the gate key.';
        }
    }
}

console.log(inigo.getCatchPhrase(westley)); // Output: Give us the gate key.
console.log(inigo.getCatchPhrase(rugen));   // Output: You have a great gift for rhyme.