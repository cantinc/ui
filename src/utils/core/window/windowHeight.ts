import { State } from 'watch-state'

export const windowHeight = new State(window.innerHeight)

window.addEventListener('resize', () => {
  windowHeight.value = window.innerHeight
})
