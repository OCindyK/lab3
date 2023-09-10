/*
Write a function camelCase(cssProp) that changes dash-separated CSS properties like 
'margin-left' into camel-cased 'marginLeft'.
*/

// a) The function should remove all dashes, and uppercase the first letter of each word after a dash.
function camelCase(cssProp) {
    return cssProp.replace(/-([a-z])/g, (_, match) => match.toUpperCase());
}

console.log(camelCase('margin-left'))           // Output: marginLeft
console.log(camelCase('background-image'))      // Output: backgroundImage
console.log(camelCase('display'))               // Output: display


console.log("");
console.log("================");
console.log("");


// b) Create variants of the camelCase function that use different types of for loops
console.log("---for loop---")
function camelCase(cssProp) {
    let result = '';
    for(let i = 0; i < cssProp.length; i++) {
        if(cssProp[i] === '-') {
            result += cssProp[i + 1].toUpperCase();
            i++;
        } else {
            result += cssProp[i];
        }
    }
    return result;
}

console.log(camelCase('margin-left'))           // Output: marginLeft
console.log(camelCase('background-image'))      // Output: backgroundImage
console.log(camelCase('display'))               // Output: display

console.log("");

console.log("---for...of loop---");
function camelCaseForOfLoop(cssProp) {
    let result = '';
    let capitalizeNext = false;
    for(const char of cssProp) {
        if(char === '-') {
            capitalizeNext = true;
        } else {
            result += capitalizeNext ? char.toUpperCase() : char;
            capitalizeNext = false;
        }
    }
    return result;
}

console.log(camelCase('margin-left'))           // Output: marginLeft
console.log(camelCase('background-image'))      // Output: backgroundImage
console.log(camelCase('display'))               // Output: display


console.log("");
console.log("================");
console.log("");


// c) with and without the conditional operator
console.log("---with conditional operator---");
function camelCaseWithConditional(cssProp) {
    let result = '';
    let capitalizeNext = false;
    for(const char of cssProp) {
        if(char === '-') {
            capitalizeNext = true;
        } else {
            result += capitalizeNext ? char.toUpperCase : char;
            capitalizeNext = false;
        }
    }
    return result;
}

console.log(camelCase('margin-left'))           // Output: marginLeft
console.log(camelCase('background-image'))      // Output: backgroundImage
console.log(camelCase('display'))               // Output: display


console.log("");

console.log("---without conditional operator---");
function camelCaseWithoutConditional(cssProp) {
    let result = '';
    let capitalizeNext = false;
    for(const char of cssProp) {
        if(char === '-') {
            capitalizeNext = true;
        } else if (capitalizeNext) {
            result += char.toUpperCase();
            capitalizeNext = false;
        } else {
            result += char;
        }
    }
    return result;
}

console.log(camelCase('margin-left'))           // Output: marginLeft
console.log(camelCase('background-image'))      // Output: backgroundImage
console.log(camelCase('display'))               // Output: display
