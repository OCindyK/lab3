/*
c) Extend debounce to allow the original debounced function printMe to take an argument 
msg which is included in the console.log statement.
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
  
  // Define the printMe function to accept an 'msg' argument
  function printMe(msg) {
    console.log(`printing debounced message: ${msg}`);
  }
  
  // Apply the debounce decorator to the printMe function with a 1500ms (1.5 seconds) delay
  printMe = debounce(printMe, 1500);
  
  // Fire off 3 calls to printMe with different messages within 300ms
  setTimeout(() => printMe('Message 1'), 100);
  setTimeout(() => printMe('Message 2'), 200);
  setTimeout(() => printMe('Message 3'), 300);
  