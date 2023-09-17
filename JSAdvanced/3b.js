/*
b) Extend the debounce decorator function to take a second argument ms, which defines the 
length of the period of inactivity instead of hardcoding to 1000ms
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
  
  // Apply the debounce decorator to the printMe function with a 2000ms (2 seconds) delay
  printMe = debounce(printMe, 2000);
  
  // Fire off 3 calls to printMe within 300ms - only the LAST one should print, after 2000ms of no calls
  setTimeout(printMe, 100);
  setTimeout(printMe, 200);
  setTimeout(printMe, 300);
  