/*
a) Create a debounce(func) decorator, which is a wrapper that takes a function func and 
suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second 
pause, the most recent call to func should be executed and any others ignored.
*/

function debounce(func, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function printMe() {
  console.log('printing debounced message');
}

// Apply the debounce decorator to the printMe function with a 1000ms (1 second) delay
printMe = debounce(printMe, 1000);

// Fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);
