import { onDestroy } from 'watch-state'

export function useResizeListener (listener: () => void) {
  window.addEventListener('resize', listener)
  onDestroy(() => window.removeEventListener('resize', listener))
}
