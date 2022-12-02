import { Validator } from '@cantinc/utils'
import { Ref, use } from '@innet/dom'
import { useSlots } from '@innet/jsx'

import { useField, useForm } from '../../../hooks'
import { Input, InputProps } from '../../interaction'

export interface FormInputProps extends Omit<InputProps, 'value' | 'onchange'> {
  name: string
  value?: string
  required?: boolean
  ref?: Ref<any>
  disabled?: boolean
  validation?: Validator<any, any>[]
  onchange?: (value: string) => void
}

export function FormInput ({
  value,
  required,
  name,
  ref,
  onchange,
  disabled,
  validation,
  ...props
}: FormInputProps) {
  const { before, after, hint } = useSlots()
  const { loading } = useForm()
  const { state, element, error } = useField({
    name,
    defaultValue: value || '',
    required,
    ref,
    validation,
  })

  return (
    <Input
      {...props}
      ref={element}
      oninput={(value: any) => {
        state.value = value
        error.value = ''
        onchange?.(value)
      }}
      error={() => Boolean(error.value)}
      value={() => state.value}
      disabled={(() => use(disabled) ?? loading.value)}
      required={required}>
      {before && <slot name='before'>{before}</slot>}
      {after && <slot name='after'>{after}</slot>}
      <slot name='hint'>{() => error.value || hint}</slot>
    </Input>
  )
}
