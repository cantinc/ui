import { use } from '@innet/dom'

import { useField, useForm } from '../../../hooks'
import { Radiobox, RadioboxProps } from '../../interaction'
import { FormFieldProps } from '../Form'

export interface FormRadioboxProps extends Omit<RadioboxProps, keyof FormFieldProps>, FormFieldProps {

}

export function FormRadiobox ({
  disabled,
  onchange,
  defaultValue,
  validation,
  ...props
}: FormRadioboxProps) {
  const { loading } = useForm()
  const { state } = useField('')

  return (
    <Radiobox
      {...props}
      value={state}
      disabled={() => use(disabled) || use(loading)}
      onchange={value => {
        state.value = value
        onchange?.(value)
      }}
    />
  )
}
