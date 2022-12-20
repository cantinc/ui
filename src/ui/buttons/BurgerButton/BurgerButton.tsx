import { HTMLStyleProps, style, use } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import styles from './BurgerButton.scss'

const useStyle = style(styles)

export type BurgerButtonSizeGenerator <
  X extends number,
  Y extends unknown[] = [3, 3, 3],
  Z extends number = never,
> = Y['length'] extends X
  ? Z
  : BurgerButtonSizeGenerator<X, [3, 3, 3, ...Y], Z | Y['length']>

export type BurgerButtonSize = Exclude<BurgerButtonSizeGenerator<999>, 3>

export interface BurgerButtonProps extends HTMLStyleProps<HTMLButtonElement> {
  size?: BurgerButtonSize
}

export function BurgerButton ({
  size = 18,
  style = '',
  ...props
}: BurgerButtonProps = {}) {
  const styles = useStyle()
  const children = useChildren()

  return (
    <button
      {...props}
      style={() => `--ui-burger-button-size:${size}px;${use(style)}`}
      class={() => styles.root}>
      <span class={() => styles.dash} />
      <span class={() => styles.dash} />
      <span class={() => styles.dash} />
      <span class={() => styles.children}>
        {children}
      </span>
    </button>
  )
}
