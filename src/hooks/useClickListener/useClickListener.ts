import { onDestroy } from 'watch-state'

export function useClickListener (listener: () => void) {
  const timer = setTimeout(() => document.documentElement.addEventListener('click', listener))

  onDestroy(() => {
    clearTimeout(timer)
    document.documentElement.removeEventListener('click', listener)
  })
}
