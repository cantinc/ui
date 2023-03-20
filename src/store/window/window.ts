import { State } from 'watch-state'

export const scrollPosition = new State(window.scrollY)

export const scrollPositionListener = () => {
  scrollPosition.value = window.scrollY
}

window.addEventListener('scroll', scrollPositionListener, { capture: false, passive: true })
