const round = require('./round')

class RotatingBurst {
  // RPS: Rotations Per Second
  // FPS: Frames Per Second
  constructor(selector, RPS, FPS = 60) {
    this.element = document.querySelector(selector)
    this.interval = 1 / FPS
    this.rotation = 360 * RPS
    this.angle = 0
    this.seconds = 0
  }

  rotate() {
    this.seconds += this.interval
    this.seconds = round(this.seconds, 3)
    const newAngle = round(this.seconds * this.rotation, 3)
    this.angle = newAngle % 360

    const nextRotation = `scale(5) rotate(${this.angle}deg)`
    this.element.style.transform = nextRotation
  }

  start() {
    this.animation = setInterval(() => this.rotate(), this.interval * 1000)
  }

  pause() {
    clearInterval(this.animation)
  }
}

module.exports = RotatingBurst
