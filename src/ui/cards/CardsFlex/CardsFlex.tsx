import { style } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import { Flex, type FlexElement, type FlexProps, type FlexStyles } from '../../layout'
import styles from './CardsFlex.scss'

const useStyle = style(styles)

export type CardsFlexProps<E extends FlexElement = FlexElement, S extends FlexStyles = FlexStyles> = FlexProps<E, S>

export function CardsFlex<E extends FlexElement = FlexElement> (props: CardsFlexProps<E>) {
  const children = useChildren()
  const styles = useStyle()

  return (
    <Flex {...props} class={() => styles.root}>
      {children}
    </Flex>
  )
}
