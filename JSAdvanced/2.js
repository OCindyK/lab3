/*
The following delayMsg function is intended to be used to delay printing a message until 
some time has passed.
*/

function delayMsg(msg)
{
  console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')

// a) What order will the four tests below print in? Why?
/*
First, #4: Not delayed at all will print immediately because it is a regular function call and not wrapped in 'setTimeout'.
Even though #3: Delayed by 0ms has a delay of 0 miliseconds, the event loop may introduce a minimal delay.
  But it will generate very quickly after #4.
The next test to execute is #2: Delayed by 20ms, due to its short delay of 20 miliseconds.
Lastly, the last test to execute is #1 because of the delay time of 100 miliseconds.
*/


console.log("");
console.log("======================");
console.log("");


// b) Rewrite delayMsg as an arrow function
/*
const delayMsg = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};
*/


console.log("");
console.log("======================");
console.log("");


// c) Add a fifth test which uses a large delay time (greater than 10 seconds)
setTimeout(delayMsg, 15000, '#5: Delayed by 15 seconds');


console.log("");
console.log("======================");
console.log("");


// d) Use clearTimeout to prevent the fifth test from printing at all.
const timeoutId = setTimeout(delayMsg, 15000, '#5: Delayed by 15 seconds');
clearTimeout(timeoutId);
// It will not execute because the timeout is canceled before it has a chance to run.