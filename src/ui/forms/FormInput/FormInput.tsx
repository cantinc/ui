import { Ref } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import { useField, useForm } from '../../../hooks'
import { Input, InputProps } from '../../interaction'

export interface FormInputProps extends Omit<InputProps, 'value' | 'onchange'> {
  name: string
  value?: string
  required?: boolean
  ref?: Ref<any>
  disabled?: boolean
  onchange?: (value: string) => void
}

export function FormInput ({
  value,
  required,
  name,
  ref,
  onchange,
  disabled,
  ...props
}: FormInputProps) {
  const children = useChildren()
  const { loading } = useForm()
  const { state, element } = useField({
    name,
    defaultValue: value || '',
    required,
    ref,
  })

  return {
    type: Input,
    props: {
      ...props,
      value: () => state.value,
      onchange: (value: any) => {
        state.value = value
        onchange?.(value)
      },
      required,
      disabled: disabled ?? (() => loading.value),
      ref: element,
    },
    children,
  }
}
