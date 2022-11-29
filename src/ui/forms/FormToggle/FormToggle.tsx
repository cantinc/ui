import { useField, useForm } from '../../../hooks'
import { Toggle, ToggleProps } from '../../interaction'

export interface FormToggleProps extends Omit<ToggleProps, 'value' | 'onchange' | 'required'> {
  name: string
  defaultValue?: 'true' | 'false'
  required?: boolean
}

export function FormToggle ({
  name,
  defaultValue = 'false',
  disabled,
  required,
  ...props
}: FormToggleProps) {
  const { loading } = useForm()
  const { state, element } = useField({
    name,
    defaultValue,
    required,
  })

  return (
    <Toggle
      {...props}
      ref={element}
      value={() => state.value === 'true'}
      disabled={disabled || (() => loading.value)}
      onchange={value => {
        state.value = value ? 'true' : 'false'
      }}
    />
  )
}
