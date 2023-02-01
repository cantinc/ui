import { useField, useForm } from '../../../hooks'
import { Checkbox, type CheckboxProps } from '../../interaction'
import { type FormFieldProps } from '../Form'

export interface FormCheckboxProps extends Omit<CheckboxProps, keyof FormFieldProps>, FormFieldProps {

}

export function FormCheckbox ({
  ref,
  disabled,
  onchange,
  ...props
}: FormCheckboxProps) {
  const { loading } = useForm()
  const { state, element } = useField('false', ref)

  return (
    <Checkbox
      {...props}
      ref={element}
      checked={() => state.value === 'true'}
      disabled={disabled || (() => loading.value)}
      onchange={value => {
        state.value = value ? 'true' : 'false'
        onchange?.(state.value)
      }}
    />
  )
}
