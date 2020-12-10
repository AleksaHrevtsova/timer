console.dir(Date)
console.log(Date.now())
console.log(Date.parse('2020 1 Oct'))
console.log(Date.parse('Oct 1 2020'))
console.log(Date.parse('1 Oct 1969'))

const refs = {
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
}

class Timer {
  constructor(startTime, stopTime) {
    this.startTime = startTime;
    this.stopTime = stopTime;
    this.deltaTime = 0;
    this.interval = ''
  }
  // вспомогательные методы
  pad(value) {
    return String(value).padStart(2, '0')
  }

  getDays(time) {
    return this.pad(Math.floor(time / 1000 / 60 / 60 / 24))
  }
  getHours(time) {
    return this.pad(Math.floor(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
  }
  getMins(time) {
    return this.pad(Math.floor(time % (1000 * 60 * 60) / (1000 * 60)))
  }
  getSecs(time) {
    return this.pad(Math.floor(time % (1000 * 60) / (1000)))
  }
  updateClockface(time) {
    if (time) {
      refs.days.textContent = this.getDays(time)
      refs.hours.textContent = this.getHours(time)
      refs.minutes.textContent = this.getMins(time)
      refs.seconds.textContent = this.getSecs(time)
    } else {
      refs.days.textContent = '00'
      refs.hours.textContent = '00'
      refs.minutes.textContent = '00'
      refs.seconds.textContent = '00'
    }
  }

  start() {
    this.interval = setInterval(() => {
      let currentTime = Date.now()
      this.deltaTime = Date.parse(this.stopTime) - currentTime
      this.updateClockface(this.deltaTime)
    }, 1000)
  }
  stop() {
    clearInterval(this.interval)
    this.updateClockface()
  }
}

const timer = new Timer('1 Sep 2020 13:04:46', '15 Oct 2020 03:14:36')

refs.startBtn.addEventListener('click', () => {
  timer.start()
})

refs.stopBtn.addEventListener('click', () => {
  timer.stop()
})