import { type StateProp, style, use } from '@innet/dom'
import { useSlots } from '@innet/jsx'

import { Card, type CardProps } from '../Card'
import { CardsFlex } from '../CardsFlex'
import styles from './FlipCard.scss'

const useStyle = style(styles)

export type FlipCardAnimation = 'vertical' | 'horizontal'

export type FlipCardProps<E extends HTMLElement = HTMLElement, R = {}, S = any> = CardProps<E, R & {
  flip: StateProp<boolean>
  animation?: FlipCardAnimation
  revertAnimation?: boolean
}, S>

export function FlipCard<E extends HTMLElement = HTMLElement> ({
  flip,
  flex,
  inline,
  onclick,
  animation = 'vertical',
  revertAnimation,
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
        revertAnimation && styles.revert,
        styles[animation],
        use(flip) && styles.flip,
      ]}>
      <Card
        flex
        {...props as CardProps<E>}
        onclick={handleClick}
        class={{
          root: () => styles.front,
          show: () => styles.show,
          shown: () => styles.shown,
          hide: () => styles.hide,
        }}>
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
