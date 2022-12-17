import { HTMLStyleProps, StateProp, style, use } from '@innet/dom'
import classes from 'html-classes'
import { Cache, State } from 'watch-state'

import checkStyles from './Check.scss'

export type OmitCheckProps = 'onchange' | '_checked' | '$checked' | '_disabled' | '$disabled'

const styles = {
  root: checkStyles.root,
  checked: '',
  disabled: '',
  input: '',
  icon: '',
} as const

const useStyle = style(styles)

export interface CheckProps extends Omit<HTMLStyleProps<HTMLInputElement, typeof styles>, OmitCheckProps> {
  onchange?: (value: boolean) => void
  label?: StateProp<any>
}

export function Check ({
  label,
  checked = new State(false),
  onchange,
  disabled,
  ...props
}: CheckProps) {
  const styles = useStyle()
  const hasLabel = new Cache(() => Boolean(use(label)))

  if (checked instanceof State) {
    const oldOnChange = onchange
    onchange = (val: boolean) => {
      checked.value = val
      oldOnChange?.(val)
    }
  }

  const handleChange = (e: any) => {
    onchange?.(e.target.checked)
  }

  return (
    <label class={() => classes([styles.root, use(checked) && styles.checked, use(disabled) && styles.disabled])}>
      <input
        {...props}
        class={() => styles.input}
        _checked={checked}
        _disabled={disabled}
        onchange={handleChange}
      />
      <span class={() => styles.icon} />
      <show state={hasLabel}>
        <span>
          {label}
        </span>
      </show>
    </label>
  )
}
