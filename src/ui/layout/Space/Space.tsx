import { HTMLStyleProps, style, WatchProp } from '@innet/dom'

import styles from './Space.scss'

const useStyles = style(styles)

export interface SpaceProps extends HTMLStyleProps<HTMLSpanElement> {
  flex?: WatchProp<number>
}

export function Space ({
  flex = 1,
  style,
  ...props
}: SpaceProps = {}) {
  const styles = useStyles()

  return (
    <span
      {...props}
      style={{
        ...style,
        '--ui-space-flex': flex as any,
      }}
      class={() => styles.root}
    />
  )
}
