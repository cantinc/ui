import { use } from '@innet/dom'

import { useField, useForm } from '../../../hooks'
import { Input, type InputProps } from '../../interaction'
import { type FormFieldProps } from '../Form/types'

export interface FormInputProps extends Omit<InputProps, keyof FormFieldProps>, FormFieldProps {
  before?: JSX.Element
  after?: JSX.Element
  hint?: JSX.Element
}

export function FormInput ({
  inputRef,
  onchange,
  disabled,
  validation,
  hint,
  ...props
}: FormInputProps) {
  const { loading } = useForm('<FormInput> MUST be add in a <Form>')
  const { state, error, element } = useField('', inputRef)

  return (
    <Input
      {...props}
      hint={() => error.value || hint}
      inputRef={element}
      oninput={(value: any) => {
        state.value = value
        error.value = ''
        onchange?.(value)
      }}
      error={() => Boolean(error.value)}
      value={state}
      disabled={() => use(disabled) ?? loading.value}
    />
  )
}
