import { onDestroy } from 'watch-state'

export function useEscapeListener (listener: () => void) {
  const mainListener = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      listener()
    }
  }

  document.body.addEventListener('keyup', mainListener)
  onDestroy(() => document.body.removeEventListener('keyup', mainListener))
}
