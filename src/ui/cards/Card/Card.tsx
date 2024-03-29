import { inject, type StateProp, style, use, useHidden, useShow } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import classes from 'html-classes'
import { onDestroy, State } from 'watch-state'

import { Flex, type FlexProps } from '../../layout'
import styles from './Card.scss'

const useStyle = style(styles)

export type CardProps<E extends HTMLElement = HTMLElement, R = {}, S = any> = FlexProps<E, R & {
  clickable?: StateProp<boolean>
  border?: StateProp<number>
  preventAnimation?: boolean
  width?: StateProp<number>
  height?: StateProp<number>
  radius?: StateProp<number | string>
}, S>

export function Card<E extends HTMLElement = HTMLElement> ({
  onclick,
  clickable = !!onclick,
  border = 1,
  preventAnimation,
  width,
  height,
  style,
  radius,
  ...props
}: CardProps<E> = {} as any) {
  const children = useChildren()
  const hidden = useHidden()
  const styles = useStyle()
  const show = useShow()
  const shown = new State(false)
  let className: any
  const mainClasses = () => [
    styles.root,
    use(clickable) && styles.clickable,
  ]

  if (preventAnimation) {
    className = () => classes([
      mainClasses,
      styles.show,
      styles.shown,
    ])
  } else {
    const timer = setTimeout(() => {
      shown.value = true
    }, 600)

    onDestroy(() => clearTimeout(timer))

    className = () => classes([
      mainClasses,
      show.value && styles.show,
      shown.value && styles.shown,
      hidden?.value && styles.hide,
    ])
  }

  return (
    <Flex<any>
      onclick={onclick}
      padding={24}
      loadingOffset={border}
      {...props}
      style={{
        ...style,
        '--ui-card-radius': inject(radius, radius => typeof radius === 'number' ? `${radius}px` : radius || ''),
        '--ui-card-width': inject(width, width => width ? `${width}px` : ''),
        '--ui-card-height': inject(height, height => height ? `${height}px` : ''),
      }}
      class={className}>
      {children}
    </Flex>
  )
}
