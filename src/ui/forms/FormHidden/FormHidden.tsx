import { Ref, type StateProp, use } from '@innet/dom'
import { Cache, onDestroy, State, unwatch, Watch } from 'watch-state'

import { type FormField, useForm } from '../../../hooks'

export interface FormHiddenProps {
  name: string
  value: StateProp<string>
}

function createDynamicState <V> (value: StateProp<V>): State<V> {
  if (value instanceof State) return value

  if (value instanceof Cache || typeof value === 'function') {
    const state = new State<V>()
    new Watch(() => {
      state.value = use(value)
    })
    return state
  }

  return new State<V>(value)
}

export function FormHidden ({ name, value }: FormHiddenProps) {
  const form = useForm()

  if (!form) return

  const defaultValue = unwatch(() => use(value))
  const state = createDynamicState(value)

  const field: FormField<string, never> = {
    name,
    defaultValue,
    element: new Ref(),
    state,
    error: new State(''),
  }

  form.fields.add(field)

  onDestroy(() => {
    if (!form.destroyed) {
      form.fields.delete(field)
    }
  })
}
