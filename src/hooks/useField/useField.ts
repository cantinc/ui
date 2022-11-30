import { Ref } from '@innet/dom'
import { onDestroy, State } from 'watch-state'

import { FormField, useForm } from '../useForm'

export interface UseFieldOptions<V = string, E extends HTMLElement = HTMLInputElement> {
  name: string
  defaultValue?: V
  required?: boolean
  ref?: Ref<E>
}

export function useField <V = string, E extends HTMLElement = HTMLInputElement> ({
  name,
  defaultValue,
  required = false,
  ref = new Ref<E>(),
}: UseFieldOptions<V, E>): FormField<V, E> {
  const form = useForm()

  const field: FormField<V, E> = {
    required,
    name,
    defaultValue,
    state: new State<V>(defaultValue),
    error: new State(),
    element: ref,
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
