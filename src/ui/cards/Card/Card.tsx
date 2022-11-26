import { style, useHidden, useShow } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import classes from 'html-classes'
import { onDestroy, State } from 'watch-state'

import { Flex, FlexProps } from '../../position'
import styles from './Card.scss'

const useStyle = style(styles)

export interface CardProps extends FlexProps {
  clickable?: boolean
  preventAnimation?: boolean
}

export function Card ({
  onclick,
  clickable = !!onclick,
  preventAnimation,
  ...props
}: CardProps = {}) {
  const children = useChildren()
  const hidden = useHidden()
  const styles = useStyle()
  const show = useShow()
  const shown = new State(false)

  if (!preventAnimation) {
    const timer = setTimeout(() => {
      shown.value = true
    }, 600)

    onDestroy(() => clearTimeout(timer))
  }

  return (
    <Flex
      onclick={onclick}
      {...props}
      class={() => preventAnimation
        ? classes([
          styles.root,
          styles.show,
          styles.shown,
          clickable && styles.clickable,
        ])
        : classes([
          styles.root,
          clickable && styles.clickable,
          show.value && styles.show,
          shown.value && styles.shown,
          hidden?.value && styles.hide,
        ])}>
      {children}
    </Flex>
  )
}
