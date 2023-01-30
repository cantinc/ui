import { inject, StateProp, style, use, useHidden, useShow } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import classes from 'html-classes'
import { onDestroy, State } from 'watch-state'

import { Flex, FlexProps } from '../../layout'
import styles from './Card.scss'

const useStyle = style(styles)

export type CardProps<E extends HTMLElement = HTMLElement> = FlexProps<E, {
  clickable?: StateProp<boolean>
  loading?: StateProp<boolean>
  preventAnimation?: boolean
  width?: StateProp<number>
  height?: StateProp<number>
  radius?: StateProp<number | string>
}>

export function Card<E extends HTMLElement = HTMLElement> ({
  onclick,
  clickable = !!onclick,
  loading,
  preventAnimation,
  width,
  height,
  style,
  radius = 8,
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
    use(loading) && styles.loading,
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
      padding={18}
      {...props}
      style={{
        ...style,
        '--ui-card-radius': inject(radius, radius => typeof radius === 'number' ? `${radius}px` : radius),
        '--ui-card-width': inject(width, width => width ? `${width}px` : ''),
        '--ui-card-height': inject(height, height => height ? `${height}px` : ''),
      }}
      class={className}>
      <show state={inject(loading, loading => !loading)}>
        {children}
      </show>
    </Flex>
  )
}
