import { Context, useContext } from '@innet/jsx'

export interface FormContext {
  data: FormData
}

export const formContext = new Context<FormContext>()

export function useForm () {
  return useContext(formContext)
}
