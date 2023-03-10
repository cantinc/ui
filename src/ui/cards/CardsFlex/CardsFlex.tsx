import { style } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import { Flex, type FlexProps } from '../../layout'
import styles from './CardsFlex.scss'

const useStyle = style(styles)

export type CardsFlexProps<E extends HTMLElement = HTMLElement, R = {}, S = any> = FlexProps<E, R, S>

export function CardsFlex<E extends HTMLElement = HTMLElement, R = {}, S = any> (props: CardsFlexProps<E, R, S>) {
  const children = useChildren()
  const styles = useStyle()

  return (
    <Flex {...props} class={() => styles.root}>
      {children}
    </Flex>
  )
}
