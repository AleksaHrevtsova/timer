import refs from "../refs/timerRefs.js";
console.log(refs);
let day = `Dec 27 2020 08:00:00`;

// ======
function setTime(time) {
  let days = Math.floor(time / 1000 / 60 / 60 / 24);
  let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((time % (1000 * 60)) / 1000);
  return { days, hours, mins, seconds };
}
function reset(...arr) {
  return arr.map((el) => (el.textContent = "00"));
}
// ==========
function myTimer(date, object) {
  let timeBetween = new Date(date) - Date.now(); // обратный отсчет
  // let timeBetween = Date.now() - new Date(date); // прямой отсчет
  let x = setTime(timeBetween);
  console.log(x);

  object.days.textContent = x.days;
  object.hours.textContent = x.hours;
  object.mins.textContent = x.mins;
  object.seconds.textContent = x.seconds;
}
let interval;

// =========== CLASS TIMER =======

class Timer {
  constructor(date, obj) {
    this.date = date;
    this.refs = obj;
  }
  count() {
    let x = setTime(new Date(this.date) - Date.now());
    console.log(x);
    this.refs.days.textContent = x.days;
    this.refs.hours.textContent = x.hours;
    this.refs.mins.textContent = x.mins;
    this.refs.seconds.textContent = x.seconds;
    //
  }

  start() {
    interval = setInterval(() => {
      this.count();
    }, 1000);
  }
  stop() {
    const { days, hours, mins, seconds } = this.refs;
    clearInterval(interval);
    reset(days, hours, mins, seconds);
  }
}
const timer = new Timer(day, refs);
console.log(timer);

refs.start.addEventListener("click", () => {
  // interval = setInterval(() => {
  //   myTimer(day, refs);
  // }, 1000);

  // ==== by Class
  timer.start();
});

refs.stop.addEventListener("click", () => {
  // clearInterval(interval);
  // reset(refs.days, refs.hours, refs.mins, refs.seconds);

  // ==== by Class
  timer.stop();
});
