import { use } from '@innet/dom'
import { useSlots } from '@innet/jsx'

import { useField, useForm } from '../../../hooks'
import { Input, InputProps } from '../../interaction'
import { FormFieldProps } from '../Form/types'

export interface FormInputProps extends Omit<InputProps, keyof FormFieldProps>, FormFieldProps {

}

export function FormInput ({
  inputRef,
  onchange,
  disabled,
  validation,
  ...props
}: FormInputProps) {
  const { before, after, hint } = useSlots()
  const { loading } = useForm()
  const { state, error, element } = useField('', inputRef)

  return (
    <Input
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
    </Input>
  )
}
