import { HTMLProps } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import { style } from '../../../hooks'
import styles from './Typography.scss'

export interface TypographyProps extends HTMLProps<HTMLDivElement> {

}

const useStyle = style(styles)

export function Typography (props: TypographyProps) {
  const children = useChildren()
  const styles = useStyle()

  return (
    <div {...props} class={styles.root}>{children}</div>
  )
}

Typography.componentName = 'Typography'
