import { optional, required } from '@cantinc/utils'
import { Ref } from '@innet/dom'
import { useProps } from '@innet/jsx'
import { onDestroy, State, Watch } from 'watch-state'

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
    value = new State<V>(defaultValue),
  } = useProps<FormFieldProps<V>>()

  const field: FormField<V, E> = {
    name,
    defaultValue,
    state: value,
    error: new State(),
    element: ref,
    validation: req ? required(validation) : validation ? optional(validation) : validation,
  }

  new Watch(() => {
    if (field.state.value !== defaultValue) {
      form.touched[name] = true
    }
  })

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
