import { type HTMLProps, style } from '@innet/dom'

import styles from './Typography.scss'

export interface TypographyProps extends HTMLProps<HTMLDivElement> {

}

const useStyle = style(styles)

export function Typography (props: TypographyProps) {
  const styles = useStyle()

  return <article {...props} class={styles.root} />
}
