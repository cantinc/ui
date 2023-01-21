import { windowWidth } from 'src/utils'
import { Cache, State } from 'watch-state'

export const isMobile = new Cache(() => windowWidth.value <= 1024)
export const isDesktop = new Cache(() => !isMobile.value)
export const layoutMenu = new State(false)
export const shownLayoutMenu = new Cache(() => isMobile.value && layoutMenu.value)

export const showLayoutMenu = () => {
  layoutMenu.value = true
}
export const hideLayoutMenu = () => {
  layoutMenu.value = false
}
