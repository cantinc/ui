import { HTMLStyleProps, StateProp, style, use } from '@innet/dom'
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
  style = '',
  color,
  size = 18,
  ...props
}: ArrowProps = {}) {
  const styles = useStyle()

  const getColor = () => {
    const currentColor = use(color)
    return currentColor ? `--ui-arrow-color:${currentColor};` : ''
  }

  return (
    <span
      {...props}
      style={() => `${getColor()}--ui-arrow-size:${use(size)}px${use(style)}`}
      class={() => classes([
        styles.root,
        styles[use(direction)],
      ])}
    />
  )
}
