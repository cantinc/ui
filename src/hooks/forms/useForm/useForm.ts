import { type ValidationMap, type Validator } from '@cantinc/utils'
import { type Ref } from '@innet/dom'
import { Context, useContext } from '@innet/jsx'
import { type State } from 'watch-state'

import { type FormProps } from '../../../ui'

export interface FormField<V, E extends HTMLElement> {
  name: string
  state: State<V>
  error: State<string>
  element: Ref<E>
  defaultValue?: V
  removed?: boolean
  validation?: Validator<any, any>[]
}

export interface FormContext extends FormProps {
  fields: Set<FormField<any, any>>
  destroyed: boolean
  loading: State<boolean>
  ref: Ref<HTMLFormElement>
  responseData?: any
  submitData?: Record<string, any>
  validation: ValidationMap<any>
  touched: Record<string, boolean>
}

export const formContext = new Context<FormContext>()

export function useForm (): FormContext | undefined
export function useForm (errorMessage: string): FormContext
export function useForm (errorMessage?: string) {
  const form = useContext(formContext)

  if (errorMessage && !form) {
    throw new Error(errorMessage)
  }

  return form
}

export function useFormStrict () {
  const form = useForm()

  if (!form) {
    throw new Error('useForm must be used in <Form>')
  }

  return form
}
