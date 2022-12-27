import { inject, StateProp, style, use, useHidden, useShow } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import classes from 'html-classes'
import { onDestroy, State } from 'watch-state'

import { Flex, FlexProps } from '../../layout'
import styles from './Card.scss'

const useStyle = style(styles)

export interface CardProps extends FlexProps {
  clickable?: StateProp<boolean>
  loading?: StateProp<boolean>
  preventAnimation?: boolean
}

export function Card ({
  onclick,
  clickable = !!onclick,
  loading,
  preventAnimation,
  ...props
}: CardProps = {}) {
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
    <Flex
      onclick={onclick}
      {...props}
      class={className}>
      <show state={inject(loading, loading => !loading)}>
        {children}
      </show>
    </Flex>
  )
}
