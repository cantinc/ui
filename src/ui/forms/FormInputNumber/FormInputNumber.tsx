import { use } from '@innet/dom'
import { type Merge } from 'src/types'

import { useField, useForm } from '../../../hooks'
import { InputNumber, type InputNumberProps } from '../../interaction'
import { type FormFieldProps } from '../Form/types'

export interface FormInputNumberProps extends Merge<InputNumberProps, FormFieldProps<number>> {}

export function FormInputNumber ({
  inputRef,
  onchange,
  disabled,
  validation,
  hint,
  ...props
}: FormInputNumberProps) {
  const { loading } = useForm('<FormInputNumber> MUST be add in a <Form>')
  const { state, error, element } = useField<number>(0, inputRef)

  return (
    <InputNumber
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
