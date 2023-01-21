import { Watch } from 'watch-state'

import { windowHeight } from '../core/window/height'

export function bindWindowHeight () {
  return new Watch(() => {
    document.body.style.setProperty('--window-height', `${windowHeight.value}px`)
  })
}
