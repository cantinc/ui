import { Cache, State } from 'watch-state'

import { windowWidth } from '../../window'

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
