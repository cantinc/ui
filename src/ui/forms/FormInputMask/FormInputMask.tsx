import { use } from '@innet/dom'
import { useSlots } from '@innet/jsx'

import { useField, useForm } from '../../../hooks'
import { InputMask, type InputMaskProps } from '../../interaction'
import { type FormFieldProps } from '../Form/types'

export interface FormInputMaskProps extends Omit<InputMaskProps, keyof FormFieldProps>, FormFieldProps {

}

export function FormInputMask ({
  inputRef,
  onchange,
  disabled,
  validation,
  ...props
}: FormInputMaskProps) {
  const { before, after, hint } = useSlots()
  const { loading } = useForm()
  const { state, error, element } = useField('', inputRef)

  return (
    <InputMask
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
    </InputMask>
  )
}
