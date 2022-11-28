import { Ref } from '@innet/dom'
import { onDestroy, State } from 'watch-state'

import { FormField, useForm } from '../useForm'

export function useField <V = string, E extends HTMLElement = HTMLInputElement> (name: string, defaultValue?: V): FormField<V, E> {
  const form = useForm()

  const element = new Ref<E>()

  const field: FormField<V, E> = {
    name,
    defaultValue,
    state: new State<V>(defaultValue),
    error: new State(),
    element,
  }

  if (form) {
    form.fields.add(field)

    onDestroy(() => {
      if (!form.destroyed) {
        form.fields.delete(field)
      }
    })
  }

  return field
}
