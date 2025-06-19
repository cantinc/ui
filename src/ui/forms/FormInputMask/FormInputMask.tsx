import { use } from '@innet/dom'

import { useField, useForm } from '../../../hooks'
import { InputMask, type InputMaskProps } from '../../interaction'
import { type FormFieldProps } from '../Form/types'

export interface FormInputMaskProps extends Omit<InputMaskProps, keyof FormFieldProps>, FormFieldProps {
  before?: JSX.Element
  after?: JSX.Element
  hint?: JSX.Element
}

export function FormInputMask ({
  inputRef,
  onchange,
  disabled,
  validation,
  hint,
  ...props
}: FormInputMaskProps) {
  const { loading } = useForm('<FormInputMask> must be used in a <Form>')
  const { state, error, element } = useField('', inputRef)

  return (
    <InputMask
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
