import refs from "../refs/timerRefs.js";
console.log(refs);
let day = `Sep 27 2020 08:00:00`;

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
refs.start.addEventListener("click", () => {
  interval = setInterval(() => {
    myTimer(day, refs);
  }, 1000);
});

refs.stop.addEventListener("click", () => {
  clearInterval(interval);
  reset(refs.days, refs.hours, refs.mins, refs.seconds);
});
