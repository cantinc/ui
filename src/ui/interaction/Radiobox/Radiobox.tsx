import { inject, type StateProp, style, use, useMapValue } from '@innet/dom'
import { State } from 'watch-state'

import { Flex, type FlexProps } from '../../layout'
import { Check, type CheckProps } from '../../prototypes'
import styles from './Radiobox.scss'

const useStyle = style({ root: '', radio: '', ...styles })

export interface RadioItem extends CheckProps {
  value: StateProp<string>
}

export interface RadioboxProps extends Omit<FlexProps, 'onchange'> {
  value?: StateProp<string> | State<string>
  values?: StateProp<RadioItem[]>
  disabled?: StateProp<boolean>
  name?: StateProp<string>
  onchange?: (value: string) => void
}

export function Radiobox ({
  values,
  value = new State(''),
  onchange,
  name,
  disabled,
  ...props
}: RadioboxProps = {}) {
  const styles = useStyle()
  const checkStyles = Object.create(styles)
  Object.defineProperty(checkStyles, 'root', {
    get () {
      return styles.radio
    },
  })

  if (value instanceof State) {
    const oldOnChange = onchange
    onchange = (val: string) => {
      value.value = val
      oldOnChange?.(val)
    }
  }

  const Item = () => {
    const item = useMapValue<RadioItem>()
    const itemValue = inject(item, item => use(item.value))

    return (
      <Check
        disabled={disabled}
        name={name}
        checked={() => use(value) === use(itemValue)}
        type='radio'
        onchange={() => {
          onchange?.(use(itemValue))
        }}
        class={checkStyles}
      />
    )
  }

  return (
    <Flex gap={16} {...props} class={() => styles.root}>
      <map of={values || []} key='value'>
        <Item />
      </map>
    </Flex>
  )
}
