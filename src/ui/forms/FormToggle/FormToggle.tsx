import { useField, useForm } from '../../../hooks'
import { Toggle, ToggleProps } from '../../interaction'

export interface FormToggleProps extends Omit<ToggleProps, 'value' | 'onchange'> {
  name: string
  defaultValue?: 'true' | 'false'
}

export function FormToggle ({
  name,
  defaultValue = 'false',
  ...props
}: FormToggleProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { loading } = useForm()
  const { state, element } = useField(name, defaultValue)

  return (
    <Toggle
      {...props}
      ref={element}
      value={() => state.value === 'true'}
      onchange={value => {
        state.value = value ? 'true' : 'false'
      }}
    />
  )
}
