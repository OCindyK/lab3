/*
a) Write a function printFibonacci() using setInterval that outputs a number in 
the Fibonacci sequence every second.
c) Extend one of the above functions to accept a limit argument, which tells it how many 
numbers to print before stopping.
*/

console.log("Fibonacci function using setInterval");
function printFibonacci(limit) {
  let a = 0;
  let b = 1;
  let count = 0;

  const intervalId = setInterval(() => {
    if (count >= limit) {
      clearInterval(intervalId);
    } else {
      console.log(b);
      const temp = a + b;
      a = b;
      b = temp;
      count++;
    }
  }, 1000);
}

// Print Fibonacci sequence with limit set at 5
printFibonacci(5);
