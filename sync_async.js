console.log("СИНХРОН 1")

const myInterval = setInterval(() => {
  console.log(`ИНТЕРВАЛОЧКА`)
}, 1000)

const myTimeout = setTimeout(() => {
  console.log("АСИНХРОНЩИНА 5000")
}, 5000)

setTimeout(() => {
  console.log("АСИНХРОНЩИНА 0")
}, 0)

setTimeout(() => {
  console.log("АСИНХРОНЩИНА 3000")
}, 3000)

console.log("СИНХРОН 2")

console.log("СИНХРОН 3")

console.log("СИНХРОН 4")

// clearInterval(myInterval)
// clearTimeout(myTimeout)