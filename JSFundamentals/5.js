/*
Rewrite the following function using: a) function expression syntax, and b) arrow function 
syntax. Test each version to make sure they work the same.

function getGreeting(name) {
    return 'Hello ' + name + '!';
}
*/


// a) Function expression syntax
let getGreeting = function(name) {
    return "Hello " + name + "!";
};

console.log(getGreeting('Sam'));    // Output: Hello Sam!

/*
// b) Arrow function syntax
let getGreeting = (name) => "Hello " + name + "!";

console.log(getGreeting('Ben'));    // Output: Hello Ben!
*/