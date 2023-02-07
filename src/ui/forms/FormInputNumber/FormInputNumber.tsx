import { use } from '@innet/dom'
import { useSlots } from '@innet/jsx'

import { useField, useForm } from '../../../hooks'
import { InputNumber, type InputNumberProps } from '../../interaction'
import { type FormFieldProps } from '../Form/types'

export interface FormInputNumberProps extends Omit<InputNumberProps, keyof FormFieldProps<number>>, FormFieldProps<number> {

}

export function FormInputNumber ({
  inputRef,
  onchange,
  disabled,
  validation,
  ...props
}: FormInputNumberProps) {
  const { before, after, hint } = useSlots()
  const { loading } = useForm()
  const { state, error, element } = useField<number>(0, inputRef)

  return (
    <InputNumber
      {...props}
      inputRef={element}
      oninput={(value: any) => {
        state.value = value
        error.value = ''
        onchange?.(value)
      }}
      error={() => Boolean(error.value)}
      value={() => state.value}
      disabled={() => use(disabled) ?? loading.value}>
      {before && <slot name='before'>{before}</slot>}
      {after && <slot name='after'>{after}</slot>}
      <slot name='hint'>{() => error.value || hint}</slot>
    </InputNumber>
  )
}
