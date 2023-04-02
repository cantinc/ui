import { type StateProp, style } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import { Flex, type FlexProps } from '../../layout'
import styles from './InfoField.scss'

const useStyle = style(styles)

export type InfoFieldProps<E extends HTMLElement = HTMLElement> = FlexProps<E, {
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
      <show when={label}>
        <div class={() => styles.label}>
          {label}
        </div>
      </show>
      {value}
      {children}
    </Flex>
  )
}
