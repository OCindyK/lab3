/*
makeCounter below is a decorator function which creates and returns a function that 
increments a counter.
*/

function makeCounter(startFrom = 0, incrementBy = 1) {
    let currentCount = startFrom;
    return function() {
      currentCount += incrementBy;
      console.log(currentCount);
      return currentCount;
    };
  }
  
  let counter1 = makeCounter();
  console.log("Counter 1:");
  console.log(counter1()); // 1
  console.log(counter1()); // 2
  
  console.log("");

// a) Create a second counter counter2 using the makeCounter function and test to see if it remains independent to counter1
// b) Modify makeCounter so that it takes an argument startFrom specifying where the counter starts from (instead of always starting from 0)
  // counter2 starting from 10
  let counter2 = makeCounter(10);
  console.log("Counter 2:");
  console.log(counter2()); // 11
  console.log(counter2()); // 12
  
  
console.log("");
console.log("======================");
console.log("");
  

// c) Modify makeCounter to take another argument incrementBy, which specifies how much each call to counter() should increase the counter value by.
  // Modify counter1 to increment by 2
  console.log("Counter 1 (modified):");
  console.log(counter1()); // 4
  console.log(counter1()); // 6
  