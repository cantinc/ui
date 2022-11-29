import { HTMLStyleProps, style } from '@innet/dom'

import styles from './Space.scss'

const useStyles = style(styles)

export interface SpaceProps extends HTMLStyleProps<HTMLSpanElement> {

}

export function Space (props: SpaceProps) {
  const styles = useStyles()

  return <span {...props} class={styles.root} />
}
