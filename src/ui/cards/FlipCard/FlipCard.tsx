import { type StateProp, style, use } from '@innet/dom'
import { useSlots } from '@innet/jsx'

import { Card, type CardProps } from '../Card'
import { CardsFlex } from '../CardsFlex'
import styles from './FlipCard.scss'

const useStyle = style(styles)

export type FlipCardProps<E extends HTMLElement = HTMLElement, R = {}, S = any> = CardProps<E, R & {
  flip: StateProp<boolean>
}, S>

export function FlipCard<E extends HTMLElement = HTMLElement> ({
  flip,
  flex,
  inline,
  onclick,
  ...props
}: FlipCardProps<E> = {} as any) {
  const { '': children, backside } = useSlots()
  const styles = useStyle()

  function handleClick (this: HTMLElement, e: MouseEvent) {
    onclick?.call(this, e)
  }

  return (
    <CardsFlex
      inline={inline}
      align='stretch'
      flex={flex}
      class={() => [
        styles.root,
        use(flip) && styles.flip,
      ]}>
      <Card
        flex
        {...props as CardProps<E>}
        onclick={handleClick}
        class={() => styles.front}>
        {children}
      </Card>
      <Card
        {...props as CardProps<E>}
        onclick={handleClick}
        class={() => styles.back}>
        {backside}
      </Card>
    </CardsFlex>
  )
}
