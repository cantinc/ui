import { LoopItem, StateProp, style, use } from '@innet/dom'
import { State } from 'watch-state'

import { Flex, FlexProps } from '../../layout'
import { Check, CheckProps } from '../../prototypes'
import styles from './Radiobox.scss'

const useStyle = style({ root: '', radio: '', ...styles })

export interface RadioItem extends CheckProps {
  value: StateProp<string>
}

export interface RadioboxProps extends Omit<FlexProps, 'onchange'> {
  value?: StateProp<string>
  values?: StateProp<RadioItem[]>
  name?: StateProp<string>
  onchange?: (value: string) => void
}

export function Radiobox ({
  values,
  value = new State(''),
  onchange,
  name,
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

  return (
    <Flex gap={[0, 16]} {...props} class={() => styles.root}>
      <for of={values || []} key='value'>
        {(item: LoopItem<RadioItem>) => (
          <Check
            {...item.value}
            name={name}
            checked={() => use(value) === use(item.value.value)}
            type='radio'
            onchange={() => {
              onchange?.(use(item.value.value))
            }}
            class={checkStyles}
          />
        )}
      </for>
    </Flex>
  )
}
