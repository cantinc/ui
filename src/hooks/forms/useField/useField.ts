import { optional, required } from '@cantinc/utils'
import { Ref } from '@innet/dom'
import { useProps } from '@innet/jsx'
import { onDestroy, State } from 'watch-state'

import { type FormFieldProps } from '../../../ui/forms/Form/types'
import { type FormField, useForm } from '../useForm'

export function useField <
  V = string,
  E extends HTMLElement = HTMLInputElement
> (defValue: V, ref = new Ref<E>()): FormField<V, E> {
  const form = useForm()
  const {
    name,
    defaultValue = defValue,
    required: req = false,
    validation,
  } = useProps<FormFieldProps<V>>()

  const field: FormField<V, E> = {
    name,
    defaultValue,
    state: new State<V>(defaultValue),
    error: new State(),
    element: ref,
    validation: req ? required(validation) : validation ? optional(validation) : validation,
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
