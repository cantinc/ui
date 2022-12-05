import { Ref, style, use } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import classes from 'html-classes'
import { State } from 'watch-state'

import { ElementPopup, PopupPlacement } from '../../popups'
import { Input, InputProps } from '../Input'
import styles from './Selector.scss'

const useStyle = style(styles)

export interface SelectorValue {
  value: string
  label?: string
}

export interface SelectorProps extends InputProps {
  values?: SelectorValue[]
  placement?: PopupPlacement
}

export function Selector ({
  ref = new Ref<HTMLLabelElement>(),
  placement,
  value,
  values,
  oninput,
  ...props
}: SelectorProps) {
  const children = useChildren()
  const styles = useStyle()
  const show = new State(false)

  if (!value) {
    const state = new State('')
    const oldOnChange = oninput
    value = () => state.value
    oninput = (value: string) => {
      state.value = value
      oldOnChange?.(value)
    }
  }

  return (
    <>
      <Input
        {...props}
        value={value}
        oninput={oninput}
        onclick={(e: MouseEvent) => {
          e.stopPropagation()
          show.value = true
        }}
        ref={ref}
        class={styles}
      />
      <ElementPopup
        placement={placement}
        onhide={() => { show.value = false }}
        show={() => show.value}
        class={styles.popup}
        element={ref}>
        {values?.map(({ value: val, label = value }) => (
          <div
            class={() => classes([
              styles.popupMenu,
              use(value) === val && styles.selected,
            ])}
            onclick={() => {
              oninput?.(val)
              setTimeout(() => {
                show.value = false
              }, 300)
            }}>
            {label}
          </div>
        ))}
        {children}
      </ElementPopup>
    </>
  )
}
