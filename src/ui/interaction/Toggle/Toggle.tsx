import { HTMLStyleProps, StateProp, style, use } from '@innet/dom'
import classes from 'html-classes'
import { Cache, State } from 'watch-state'

import styles from './Toggle.scss'

const useStyle = style(styles)

export interface ToggleProps extends Omit<HTMLStyleProps<HTMLInputElement>, 'value' | 'onchange'> {
  value?: StateProp<boolean>
  onchange?: (value: boolean) => void
  label?: StateProp<any>
}

export function Toggle ({
  label,
  value = new State(false),
  onchange,
  disabled,
  ...props
}: ToggleProps = {}) {
  const styles = useStyle()
  const hasLabel = new Cache(() => Boolean(use(label)))

  if (value instanceof State) {
    const oldOnChange = onchange
    onchange = (val: boolean) => {
      value.value = val
      oldOnChange?.(val)
    }
  }

  const handleChange = (e: any) => {
    onchange?.(e.target.checked)
  }

  return (
    <label class={() => classes([styles.root, use(value) && styles.checked, use(disabled) && styles.disabled])}>
      <input
        {...props}
        class={styles.input}
        _checked={value}
        _disabled={disabled}
        onchange={handleChange}
        type='checkbox'
      />
      <span class={styles.icon} />
      <show state={hasLabel}>
        <span>
          {label}
        </span>
      </show>
    </label>
  )
}
