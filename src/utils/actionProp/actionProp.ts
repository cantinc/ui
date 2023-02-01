import { type StateProp } from '@innet/dom'
import { State } from 'watch-state'

export type ActionProp <V> = (value: V) => void

export function actionProp<V> (state?: StateProp<V>, action?: ActionProp<V>): ActionProp<V> | undefined {
  if (state instanceof State) {
    return val => {
      state.value = val
      action?.(val)
    }
  }

  return action
}
