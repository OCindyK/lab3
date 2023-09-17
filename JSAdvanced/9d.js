/*
We can delay execution of a function using setTimeout, where we need to provide both 
the callback function and the delay after which it should execute.

d) Try to update the then and catch messages to include the random delay value
*/

function randomDelay() {
    const minDelay = 1000; // 1 second (in milliseconds)
    const maxDelay = 20000; // 20 seconds (in milliseconds)
    const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1) + minDelay);
  
    return new Promise((resolve, reject) => {
      if (delay % 2 === 0) {
        setTimeout(() => {
          resolve(delay);
        }, delay);
      } else {
        reject(new Error("Delay is odd"));
      }
    });
  }
  
  randomDelay()
    .then((delay) => {
      console.log(`Successful delay of ${delay / 1000} seconds`);
    })
    .catch((error) => {
      console.error("Failed delay:", error.message);
    });
  