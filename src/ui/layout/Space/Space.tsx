import { HTMLStyleProps, style, use, WatchProp } from '@innet/dom'

import styles from './Space.scss'

const useStyles = style(styles)

export interface SpaceProps extends HTMLStyleProps<HTMLSpanElement> {
  flex?: WatchProp<number>
}

export function Space ({
  flex = 1,
  style = '',
  ...props
}: SpaceProps = {}) {
  const styles = useStyles()

  return (
    <span
      {...props}
      style={() => `--ui-space-flex:${use(flex)};${use(style)}`}
      class={() => styles.root}
    />
  )
}
