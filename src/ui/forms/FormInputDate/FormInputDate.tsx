import { use } from '@innet/dom'

import { useField, useForm } from '../../../hooks'
import { inputDateFormat } from '../../../utils'
import { InputDate, type InputDateProps } from '../../interaction'
import { type FormFieldProps } from '../Form/types'

export interface FormInputDateProps extends Omit<InputDateProps, keyof FormFieldProps>, FormFieldProps {
  hint?: JSX.Element
}

export function FormInputDate ({
  inputRef,
  onchange,
  disabled,
  validation,
  hint,
  ...props
}: FormInputDateProps) {
  const { loading } = useForm('<FormInputDate> MUST be add in a <Form>')
  const { state, error, element } = useField('', inputRef)

  return (
    <InputDate
      {...props}
      inputRef={element}
      oninput={(value) => {
        const newValue = value ? inputDateFormat(value) : ''
        state.value = newValue
        error.value = ''
        onchange?.(newValue)
      }}
      error={() => Boolean(error.value)}
      value={() => state.value ? new Date(state.value) : undefined}
      disabled={() => use(disabled) ?? loading.value}>
      <slot name='hint'>{() => error.value || hint}</slot>
    </InputDate>
  )
}
