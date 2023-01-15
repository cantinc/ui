import { Validator } from '@cantinc/utils'
import { Ref } from '@innet/dom'
import { Context, useContext } from '@innet/jsx'
import { State } from 'watch-state'

import { FormProps } from '../../../ui'

export interface FormField<V, E extends HTMLElement> {
  name: string
  state: State<V>
  error: State<string>
  element: Ref<E>
  defaultValue?: V
  validation?: Validator<any, any>[]
}

export interface FormContext extends FormProps {
  fields: Set<FormField<any, any>>
  destroyed: boolean
  loading: State<boolean>
  ref: Ref<HTMLFormElement>
  data?: any
}

export const formContext = new Context<FormContext>()

export function useForm () {
  return useContext(formContext)
}
