import { useListener } from '../../../hooks'

export interface ListenerProps<K extends keyof HTMLElementEventMap> {
  type: K
  listener: (e: HTMLElementEventMap[K]) => any
  target?: Window | HTMLElement
}

export function Listener<K extends keyof HTMLElementEventMap> ({
  type,
  listener,
  target,
}: ListenerProps<K>) {
  useListener(type, listener, target)
}
