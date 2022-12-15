import { useField, useForm } from '../../../hooks'
import { Toggle, ToggleProps } from '../../interaction'
import { FormFieldProps } from '../Form'

export interface FormToggleProps extends Omit<ToggleProps, keyof FormFieldProps>, FormFieldProps {

}

export function FormToggle ({
  ref,
  disabled,
  onchange,
  ...props
}: FormToggleProps) {
  const { loading } = useForm()
  const { state, element } = useField('false', ref)

  return (
    <Toggle
      {...props}
      ref={element}
      value={() => state.value === 'true'}
      disabled={disabled || (() => loading.value)}
      onchange={value => {
        state.value = value ? 'true' : 'false'
        onchange?.(state.value)
      }}
    />
  )
}
