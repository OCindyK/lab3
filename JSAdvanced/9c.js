/*
We can delay execution of a function using setTimeout, where we need to provide both 
the callback function and the delay after which it should execute.

c) Update the testing code to catch rejected promises and print a different message
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
      if (error.message === "Delay is odd") {
        console.error("Failed delay because the delay is odd");
      } else {
        console.error("Failed delay:", error.message);
      }
    });
  