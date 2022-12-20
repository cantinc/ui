import { onDestroy } from 'watch-state'

export function useListener<K extends keyof HTMLElementEventMap> (
  type: K,
  listener: (e: HTMLElementEventMap[K]) => any,
  target: Window | HTMLElement = window,
) {
  target.addEventListener(type, listener as any)
  onDestroy(() => target.removeEventListener(type, listener as any))
}
