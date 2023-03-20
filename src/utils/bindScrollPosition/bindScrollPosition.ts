import { Watch } from 'watch-state'

import { scrollPosition } from '../../store'

export function bindScrollPosition () {
  const watcher = new Watch(() => {
    document.body.style.setProperty('--scroll', `${scrollPosition.value}px`)
  })

  return () => watcher.destroy()
}
