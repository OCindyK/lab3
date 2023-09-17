/*
The following DigitalClock class uses an interval to print the time every second once 
started, until stopped.
*/
class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }

  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;

    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
/*
const myClock = new DigitalClock("my clock:");
myClock.start();
setTimeout(() => {
  myClock.stop();
}, 5000);

/*
a) Create a new class PrecisionClock that inherits from DigitalClock and adds the 
parameter precision – the number of ms between 'ticks'. This precision parameter 
should default to 1 second if not supplied.
*/
/*
class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) {
    super(prefix);
    this.precision = precision;
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }

  stop() {
    clearInterval(this.timer);
  }
}

const myPrecisionClock = new PrecisionClock("My Precision Clock:", 100); // Precision of 100 milliseconds
myPrecisionClock.start();

// Stop the precision clock after a while
setTimeout(() => {
  myPrecisionClock.stop();
}, 5000); // Stop after 5 seconds

console.log("");
console.log("======================");
console.log("");
*/


console.log("");
console.log("=======================");
console.log("");


/*
b) Create a new class AlarmClock that inherits from DigitalClock and adds the 
parameter wakeupTime in the format hh:mm. When the clock reaches this time, it 
should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should 
default to 07:00 if not supplied.
*/
class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime = "07:00") {
    super(prefix);
    this.wakeupTime = wakeupTime;
    this.timer = null; // Initialize the timer variable
    this.alarmTriggered = false; // Flag to track if the alarm has been triggered
  }

  display() {
    if (this.alarmTriggered) {
      // If the alarm has already been triggered, stop the clock
      this.stop();
      return;
    }

    const now = new Date();
    const [hours, mins] = this.wakeupTime.split(":").map(Number);

    if (
      now.getHours() === hours &&
      now.getMinutes() === mins &&
      now.getSeconds() === 0
    ) {
      // Alarm time reached, trigger the alarm and stop the clock
      console.log(`${this.prefix} Wake Up`);
      this.alarmTriggered = true;
      this.stop();
    }

    super.display();
  }
}

const alarmClock1 = new AlarmClock('Alarm 1:', '20:33'); // Wake up at 8:33 PM

alarmClock1.start();