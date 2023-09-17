/*
b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
calls to do the same thing
c) Extend one of the above functions to accept a limit argument, which tells it how many 
numbers to print before stopping.
*/

console.log("Fibonacci with nested setTimeout");
function printFibonacciTimeouts(limit) {
    let x = 0;
    let y = 1;
    let count = 0;
  
    function printNext() {
      if (count >= limit) {
        return;
      }
  
      console.log(y);
      const temp = x + y;
      x = y;
      y = temp;
      count++;
  
      setTimeout(printNext, 1000);
    }
  
    printNext();
  }
  
  // Print Fibonacci sequence with limit set at 8
  printFibonacciTimeouts(8);


