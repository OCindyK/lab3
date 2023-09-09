/*
The following object represents a basketball game and keeps track of the score as the game progresses.
a) Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works
b) Add a new method to print the full time final score
c) Add a new object property to keep track of the number of fouls and a method to increment it,
similar but separate to the score. Include the foul count in the half time and full time console messages
d) Test your object by chaining all the method calls together in different combinations.

const basketballGame = {
    score: 0,
    freeThrow() {
        this.score++;
    },
    basket() {
        this.score += 2;
    },
    threePointer() {
        this.score += 3;
    },
    halfTime() {
        console.log('Halftime score is '+this.score);
    }
}

Modify each of the above object methods to enable function chaining as below:
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();
*/

/*
// a) Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works
const basketballGame = {
    score: 0,
    freeThrow() {
        this.score++;
        return this;
    },
    basket() {
        this.score += 2;
        return this;
    },
    threePointer() {
        this.score += 3;
        return this;
    },
    halfTime() {
        console.log('Halftime score is ' + this.score);
        return this;
    }
};

basketballGame.basket().freeThrow().basket().threePointer().halfTime();
// Output: Halftime score is 8
*/
/*
// b) Add a new method to print the full time final score
const basketballGame = {
    score: 0,
    fouls: 0, // New property to track fouls
    freeThrow() {
        this.score++;
        return this;
    },
    basket() {
        this.score += 2;
        return this;
    },
    threePointer() {
        this.score += 3;
        return this;
    },
    halfTime() {
        console.log('Halftime score is ' + this.score);
        return this;
    },
    fullTime() {
        console.log('Fulltime score is ' + this.score);
        return this;
    },
};

basketballGame.basket().freeThrow().freeThrow().basket().threePointer().fullTime();
// Output: Fulltime score is 9
*/

// c) Add a property fouls and a method to increment it
const basketballGame = {
    score: 0,
    fouls: 0, // New property to track fouls
    freeThrow() {
        this.score++;
        return this;
    },
    basket() {
        this.score += 2;
        return this;
    },
    threePointer() {
        this.score += 3;
        return this;
    },
    halfTime() {
        console.log('Halftime score is ' + this.score + ', fouls: ' + this.fouls);
        return this;
    },
    fullTime() {
        console.log('Fulltime score is ' + this.score + ', fouls: ' + this.fouls);
        return this;
    },
    foul() {
        this.fouls++;
        return this;
    }
};

basketballGame.basket().freeThrow().basket().threePointer().halfTime().foul();
// Output: Halftime score is 8, fouls: 0
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().fullTime().foul();
// Output: Fulltime score is 17, fouls: 1



// d) Test your object by chaining all the method calls together in different combinations.
console.log("");
console.log("First combination:")
//basketballGame.basket().freeThrow().threePointer().halfTime().threePointer().fullTime();
/* Output:
Halftime score is 23, fouls: 2
Fulltime score is 26, fouls: 2
*/

console.log("");
console.log("Second combination:")
//basketballGame.threePointer().freeThrow().threePointer().halfTime().freeThrow().foul().basket().fullTime();
/* Output:
Halftime score is 24, fouls: 2
Fulltime score is 27, fouls: 3
*/

console.log("");
console.log("Third combination:")
basketballGame.basket().foul().freeThrow().foul().halfTime().foul().foul().threePointer().fullTime();
/* Output:
Halftime score is 20, fouls: 4
Fulltime score is 23, fouls: 6
*/