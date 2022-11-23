export class Timer {
  start?: number
  timer?: number
  destroyed = false

  constructor (private readonly callback: () => any, public delay: number = 0, autoplay?: boolean) {
    if (autoplay) {
      this.play()
    }
  }

  play () {
    if (!this.destroyed && !this.start) {
      clearTimeout(this.timer)
      this.start = Date.now()
      this.timer = setTimeout(this.callback, this.delay) as any
    }
  }

  pause () {
    if (!this.destroyed && this.start) {
      clearTimeout(this.timer)
      this.timer = undefined
      this.delay -= Date.now() - this.start
      this.start = undefined
    }
  }

  destroy () {
    clearTimeout(this.timer)
    this.destroyed = true
  }
}
