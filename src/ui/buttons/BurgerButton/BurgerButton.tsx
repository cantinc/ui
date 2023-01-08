import { HTMLStyleProps, inject, StateProp, style } from '@innet/dom'

import { Icon } from '../../icons'
import styles from './BurgerButton.scss'

const useStyle = style(styles)

export interface BurgerButtonProps extends HTMLStyleProps<HTMLButtonElement> {
  size?: StateProp<number>
}

export function BurgerButton ({
  size = 16,
  style,
  ...props
}: BurgerButtonProps = {}) {
  const styles = useStyle()
  return (
    <button
      {...props}
      style={{
        ...style,
        '--ui-burger-button-size': inject(size, size => `${size}px`),
      }}
      class={() => styles.root}>
      <Icon size={size} icon='menu' />
    </button>
  )
}
