/*
We can delay execution of a function using setTimeout, where we need to provide both 
the callback function and the delay after which it should execute.
a) Create a promise-based alternative randomDelay() that delays execution for a random amount of time (between 1 and 20 seconds)
and returns a promise we can use via .then(), as in the starter code below
*/

function randomDelay() {
    const minDelay = 1000; // 1 second (in milliseconds)
    const maxDelay = 20000; // 20 seconds (in milliseconds)
    const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1) + minDelay);
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  }
  
  randomDelay().then(() => {
    console.log("There appears to have been a delay.");
  });