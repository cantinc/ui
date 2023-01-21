import { State } from 'watch-state'

export const windowWidth = new State(window.innerWidth)

window.addEventListener('resize', () => {
  windowWidth.value = window.innerWidth
})
