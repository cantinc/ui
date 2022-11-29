import { Ref } from '@innet/dom'
import { Context, useContext } from '@innet/jsx'
import { State } from 'watch-state'

export interface FormField<V, E extends HTMLElement> {
  name: string
  state: State<V>
  error: State<string>
  element: Ref<E>
  required: boolean
  defaultValue?: V
}

export interface FormContext {
  fields: Set<FormField<any, any>>
  destroyed: boolean
  loading: State<boolean>
}

export const formContext = new Context<FormContext>()

export function useForm () {
  return useContext(formContext)
}
