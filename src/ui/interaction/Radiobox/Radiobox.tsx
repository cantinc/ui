import { Ref, style, use } from '@innet/dom'
import { onDestroy, State } from 'watch-state'

import { Check, CheckProps } from '../../prototypes'
import styles from './Radiobox.scss'

const useStyle = style(styles)

export interface RadioboxProps extends CheckProps {

}

const radioboxChangeHandlers = new Set<Function>()

export function Radiobox ({
  ref = new Ref(),
  checked = new State(false),
  onchange,
  ...props
}: RadioboxProps = {}) {
  const styles = useStyle()

  if (checked instanceof State) {
    const oldOnChange = onchange
    onchange = (val: boolean) => {
      checked.value = val
      oldOnChange?.(val)
    }
  }

  const handleChange = () => {
    const newValue = ref?.value?.checked || false

    if (newValue !== use(checked)) {
      onchange?.(newValue)
    }
  }

  radioboxChangeHandlers.add(handleChange)

  onDestroy(() => {
    radioboxChangeHandlers.delete(handleChange)
  })

  return (
    <Check
      {...props}
      checked={() => use(checked)}
      ref={ref}
      type='radio'
      onchange={() => {
        radioboxChangeHandlers.forEach(fn => fn())
      }}
      class={styles}
    />
  )
}
