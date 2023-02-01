import { type HTMLStyleProps, inject, type StateProp, style } from '@innet/dom'

import styles from './Space.scss'

const useStyles = style(styles)

export interface SpaceProps extends HTMLStyleProps<HTMLSpanElement> {
  flex?: StateProp<number>
  gap?: StateProp<number>
}

export function Space ({
  flex = 1,
  style,
  gap,
  ...props
}: SpaceProps = {}) {
  const styles = useStyles()

  return (
    <span
      {...props}
      style={{
        ...style,
        'min-width': inject(gap, gap => gap ? `${gap}px` : ''),
        'min-height': inject(gap, gap => gap ? `${gap}px` : ''),
        '--ui-space-flex': flex as any,
      }}
      class={() => styles.root}
    />
  )
}
