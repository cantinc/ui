import { HTMLStyleProps, StateProp, style, use } from '@innet/dom'
import classes from 'html-classes'
import { State } from 'watch-state'

import styles from './Arrow.scss'

const useStyle = style(styles)

export interface ArrowProps extends HTMLStyleProps<HTMLDivElement> {
  top?: StateProp<any>
  color?: StateProp<string>
}

export function Arrow ({
  top = new State(false),
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
        use(top) && styles.down,
      ])}
    />
  )
}
