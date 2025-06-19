import { Show, type StateProp, style } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import { type Merge } from 'src/types'

import { Flex, type FlexElement, type FlexProps } from '../../layout'
import styles from './InfoField.scss'

const useStyle = style(styles)

export type InfoFieldProps<E extends FlexElement = FlexElement> = Merge<FlexProps<E>, {
  label?: StateProp<string>
  value?: StateProp<string>
}>

export function InfoField ({
  label,
  value,
  ...props
}: InfoFieldProps) {
  const children = useChildren()
  const styles = useStyle()

  return (
    <Flex
      wrap
      {...props}
      class={() => styles.root}>
      <Show when={label}>
        <div class={() => styles.label}>
          {label}
        </div>
      </Show>
      {value}
      {children}
    </Flex>
  )
}
