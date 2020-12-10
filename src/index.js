import css from "./css/style.css";
import "./js/timer.js";

// console.log(`New Year`);

// setTimeout(() => {
//   console.log(`Merry Christmas withsetTimeout!`);
// }, 500);

let msg = `Merry Christmas!`;

function merryChristmas(x) {
  console.log(x);
}

// console.log(`My synchron - 1`);
// console.log(`My synchron - 2`);
// console.log(`My synchron - 3`);
// console.log(`My synchron - 4`);
// merryChristmas(msg);

let x = 0;

let id = setInterval(() => {
  console.log((x += 2));
}, 2000);

clearInterval(id);

// ========= Date ===========
// console.dir(Date);
// const date = Date();
// console.log(date);

// const birthday = new Date(1990, 6, 30);
// console.log(birthday);

// // ---- UNIX time
// const unixTime = Date.now();
// console.log(unixTime);

// let a = 1607623870837; // unixTime
// let b = 1607621870837; // Thu Dec 10 2020 19:37:50 GMT+0200

// const dateOfB = new Date(b);
// console.log(dateOfB);

// let day = dateOfB.getDay();
// console.log(day); // 4 -thuesday

// let month = dateOfB.getMonth();
// console.log(month); // 11 - december
// console.log("getFullYear", dateOfB.getFullYear());
// console.log("getUTCFullYear", dateOfB.getUTCFullYear());

// console.log("getTime", dateOfB.getTime());

// let z = 900719925474999;

// console.log(new Date(z));
