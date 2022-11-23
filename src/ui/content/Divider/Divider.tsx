import { HTMLProps, Style, style } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import styles from './Divider.scss'

const useStyles = style(styles)

export function Divider (props: HTMLProps & Style) {
  const children = useChildren()
  const styles = useStyles()

  if (!children) return <hr {...props} class={styles.root} />

  return (
    <fieldset class={styles.root}>
      <legend class={styles.legend}>
        {children}
      </legend>
    </fieldset>
  )
}

Divider.componentName = 'Divider'
