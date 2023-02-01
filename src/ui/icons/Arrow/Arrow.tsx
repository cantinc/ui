import { type HTMLStyleProps, inject, type StateProp, style, use } from '@innet/dom'
import classes from 'html-classes'

import styles from './Arrow.scss'

const useStyle = style(styles)

export type ArrowDirection = 'down' | 'top' | 'left' | 'right'

export interface ArrowProps extends HTMLStyleProps<HTMLDivElement> {
  direction?: StateProp<ArrowDirection>
  color?: StateProp<string>
  size?: StateProp<number>
}

export function Arrow ({
  direction = 'down',
  style,
  color,
  size = 18,
  ...props
}: ArrowProps = {}) {
  const styles = useStyle()

  return (
    <span
      {...props}
      style={{
        ...style,
        '--ui-arrow-color': color || '',
        '--ui-arrow-size': inject(size, size => `${size}px`),
      }}
      class={() => classes([
        styles.root,
        styles[use(direction)],
      ])}
    />
  )
}
