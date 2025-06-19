import { type StateProp, style, use } from '@innet/dom'
import { type Merge } from 'src/types'
import { type FlexElement, type FlexStyles } from 'src/ui'

import { Card, type CardProps } from '../Card'
import { CardsFlex } from '../CardsFlex'
import styles from './FlipCard.scss'

const useStyle = style(styles)

export type FlipCardAnimation = 'vertical' | 'horizontal'

export type FlipCardProps<E extends FlexElement = FlexElement, S extends FlexStyles = FlexStyles> = Merge<CardProps<E, S>, {
  flip: StateProp<boolean>
  animation?: FlipCardAnimation
  revertAnimation?: boolean
  backside?: JSX.Element
}>

export function FlipCard<E extends FlexElement = FlexElement> ({
  flip,
  flex,
  inline,
  onclick,
  animation = 'vertical',
  revertAnimation,
  children,
  backside,
  ...props
}: FlipCardProps<E> = {} as any) {
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
        {...props as unknown as CardProps<E>}
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
        {...props as unknown as CardProps<E>}
        onclick={handleClick}
        class={() => styles.back}>
        {backside}
      </Card>
    </CardsFlex>
  )
}
