import { Style } from '@innet/dom'

import { useField } from '../../../hooks'
import { Toggle } from '../../interaction'

export interface FormToggleProps extends Style {
  name: string
  defaultValue?: 'true' | 'false'
}

export function FormToggle ({
  name,
  defaultValue = 'false',
}: FormToggleProps) {
  const { state, element } = useField(name, defaultValue)

  return (
    <Toggle
      ref={element}
      value={() => state.value === 'true'}
      onchange={value => {
        state.value = value ? 'true' : 'false'
      }}
    />
  )
}
