import { Validator } from '@cantinc/utils'
import { Ref } from '@innet/dom'
import { Context, useContext } from '@innet/jsx'
import { State } from 'watch-state'

export interface FormField<V, E extends HTMLElement> {
  name: string
  state: State<V>
  error: State<string>
  element: Ref<E>
  defaultValue?: V
  validation?: Validator<any, any>[]
}

export interface FormContext {
  fields: Set<FormField<any, any>>
  destroyed: boolean
  loading: State<boolean>
  ref: Ref<HTMLFormElement>
}

export const formContext = new Context<FormContext>()

export function useForm () {
  return useContext(formContext)
}
