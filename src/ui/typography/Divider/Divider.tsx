import { type HTMLStyleProps, type StateProp, style, use } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import classes from 'html-classes'

import styles from './Divider.scss'

const useStyles = style(styles)

interface DividerPros extends HTMLStyleProps {
  vertical?: StateProp<boolean>
}

export function Divider ({
  vertical,
  ...props
}: DividerPros = {}) {
  const children = useChildren()
  const styles = useStyles()

  if (!children) {
    return (
      <hr
        {...props} class={() => classes([
          styles.root,
          use(vertical) && styles.vertical,
        ])}
      />
    )
  }

  return (
    <fieldset
      class={() => classes([
        styles.root,
        use(vertical) && styles.vertical,
      ])}>
      <legend class={() => styles.legend}>
        {children}
      </legend>
    </fieldset>
  )
}
