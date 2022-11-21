import { HTMLProps, Style, style } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import classes from 'html-classes'

import styles from './Spin.scss'

const useStyle = style(styles)

export interface SpinProps extends Style, HTMLProps<HTMLDivElement> {
  loading?: () => boolean
}

export function Spin ({
  loading,
  ...props
}: SpinProps = {}) {
  const children = useChildren()
  const styles = useStyle()
  const pointClass = classes(['spin__point', styles.point])

  const spinner = (
    <div class={classes(['spin', styles.spin])}>
      <div class={pointClass} />
      <div class={pointClass} />
      <div class={pointClass} />
    </div>
  )

  return (
    <div {...props} class={() => styles.root}>
      {loading ? () => loading() && spinner : spinner}
      {children && (
        <div class={styles.children}>
          {children}
        </div>
      )}
    </div>
  )
}
