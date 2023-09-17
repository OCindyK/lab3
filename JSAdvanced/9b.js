/*
We can delay execution of a function using setTimeout, where we need to provide both 
the callback function and the delay after which it should execute.

b) If the random delay is even, consider this a successful delay and resolve the promise,
and if the random number is odd, consider this a failure and reject it
*/

function randomDelay() {
    const minDelay = 1000; // 1 second (in milliseconds)
    const maxDelay = 20000; // 20 seconds (in milliseconds)
    const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1) + minDelay);
  
    return new Promise((resolve, reject) => {
      if (delay % 2 === 0) {
        setTimeout(() => {
          resolve();
        }, delay);
      } else {
        reject(new Error("Delay is odd"));
      }
    });
  }
  
  randomDelay()
    .then(() => {
      console.log("Successful delay");
    })
    .catch((error) => {
      console.error("Failed delay:", error.message);
    });
