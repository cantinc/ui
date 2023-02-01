import { type HTMLStyleProps, style } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import styles from './Nowrap.scss'

const useStyle = style(styles)

export interface NowrapProps extends HTMLStyleProps<HTMLSpanElement> {

}

export function Nowrap (props: NowrapProps) {
  const children = useChildren()
  const styles = useStyle()

  return (
    <span
      {...props}
      class={() => styles.root}>
      {children}
    </span>
  )
}
