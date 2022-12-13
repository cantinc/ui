import { use, WatchProp } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import { Cache, State } from 'watch-state'

export interface ShowProps {
  state: WatchProp<boolean> | State<boolean> | Cache<boolean>
}

export function Show ({ state }: ShowProps) {
  const children = useChildren()

  const value = state instanceof State || state instanceof Cache ? () => state.value : state

  return () => use(value) ? children : null
}
