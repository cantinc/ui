import { required, Validator } from '@cantinc/utils'
import { Ref } from '@innet/dom'
import { onDestroy, State } from 'watch-state'

import { FormField, useForm } from '../useForm'

export interface UseFieldOptions<V = string, E extends HTMLElement = HTMLInputElement> {
  name: string
  validation?: Validator<any, any>[]
  defaultValue?: V
  required?: boolean
  ref?: Ref<E>
}

export function useField <V = string, E extends HTMLElement = HTMLInputElement> ({
  name,
  defaultValue,
  required: req = false,
  validation,
  ref = new Ref<E>(),
}: UseFieldOptions<V, E>): FormField<V, E> {
  const form = useForm()

  const field: FormField<V, E> = {
    name,
    defaultValue,
    state: new State<V>(defaultValue),
    error: new State(),
    element: ref,
    validation: req ? required(validation) : validation,
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
