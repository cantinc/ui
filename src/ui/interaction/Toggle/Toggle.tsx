import { HTMLProps, Style, style } from '@innet/dom'
import classes from 'html-classes'

import styles from './Toggle.scss'

const useStyle = style(styles)

export interface ToggleProps extends Style, HTMLProps<HTMLInputElement> {
  value: () => boolean
  onchange: (value: boolean) => void
  label?: any
}

export function Toggle ({
  label,
  value,
  onchange,
  ...props
}: ToggleProps) {
  const styles = useStyle()

  const handleChange = (e: any) => {
    onchange(e.target.checked)
  }

  return (
    <label class={() => classes([styles.root, value() && styles.checked])}>
      <input
        {...props}
        class={styles.input}
        checked={() => value() ? true : undefined}
        onchange={handleChange}
        type='checkbox'
      />
      <span class={styles.icon} />
      {label && (
        <span>
          {label}
        </span>
      )}
    </label>
  )
}
