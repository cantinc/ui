import { HTMLStyleProps, style, use } from '@innet/dom'

import styles from './BurgerButton.scss'

const useStyle = style(styles)

export interface BurgerButtonProps extends HTMLStyleProps<HTMLButtonElement> {
  size?: number
}

export function BurgerButton ({
  size = 18,
  style = '',
  ...props
}: BurgerButtonProps = {}) {
  const styles = useStyle()

  return (
    <button
      {...props}
      style={() => `--ui-burger-button-size:${size}px;${use(style)}`}
      class={() => styles.root}>
      <span class={() => styles.dash} />
      <span class={() => styles.dash} />
      <span class={() => styles.dash} />
    </button>
  )
}
