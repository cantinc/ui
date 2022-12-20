import { HTMLStyleProps, StateProp, style, use } from '@innet/dom'
import classes from 'html-classes'

import styles from './Arrow.scss'

const useStyle = style(styles)

export type ArrowDirection = 'down' | 'top' | 'left' | 'right'

export interface ArrowProps extends HTMLStyleProps<HTMLDivElement> {
  direction?: StateProp<ArrowDirection>
  color?: StateProp<string>
}

export function Arrow ({
  direction = 'down',
  style = '',
  color = 'var(--color-10)',
  ...props
}: ArrowProps = {}) {
  const styles = useStyle()

  return (
    <span
      {...props}
      style={() => `--ui-arrow-color:${use(color)};${use(style)}`}
      class={() => classes([
        styles.root,
        styles[use(direction)],
      ])}
    />
  )
}
