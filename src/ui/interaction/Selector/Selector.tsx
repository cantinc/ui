import { LoopItem, Ref, style, use, WatchProp } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import { State } from 'watch-state'

import { ElementPopup, PopupPlacement } from '../../popups'
import { Input, InputProps } from '../Input'
import { SelectorItem, SelectorItemProps } from '../SelectorItem'
import { selectorContext } from './constants'
import styles from './Selector.scss'

const useStyle = style(styles)

export interface SelectorProps extends InputProps {
  values?: SelectorItemProps[]
  placement?: PopupPlacement
  searchValue?: WatchProp<string>
  onsearch?: (search: string) => void
}

export interface SelectorContext {
  value: WatchProp<string>
  setValue: (value: string) => void
  hide: () => void
}

export function Selector ({
  ref = new Ref<HTMLLabelElement>(),
  placement,
  value,
  values,
  oninput,
  searchValue,
  onsearch,
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

  if (!searchValue) {
    searchValue = value
  }

  if (!onsearch) {
    onsearch = oninput
  }

  const selector: SelectorContext = {
    value,
    setValue: oninput as any,
    hide () { show.value = false },
  }

  const valuesFilter = () => values?.filter(({ value: val, label }: SelectorItemProps) => {
    const currentValue = (use(searchValue) || '').toLowerCase()

    return label?.toLowerCase().includes(currentValue) || val.toLowerCase().startsWith(currentValue)
  }) || []

  return (
    <>
      <Input
        {...props}
        value={value}
        oninput={oninput}
        props={{
          ...props?.props,
          input: {
            ...props?.props?.input,
            onfocus (e: any) {
              show.value = true
              ;(props?.props?.input?.onfocus as any)?.(e)
            },
            onblur (e: any) {
              show.value = false
              ;(props?.props?.input?.onblur as any)?.(e)
            },
          },
        }}
        ref={ref}
        class={styles}
      />
      <ElementPopup
        placement={placement}
        show={() => show.value}
        class={styles.popup}
        element={ref}>
        <context for={selectorContext} set={selector}>
          <for of={valuesFilter} key='value'>
            {(item: LoopItem<SelectorItemProps>) => (
              <SelectorItem {...item.value} />
            )}
          </for>
        </context>
        {children}
      </ElementPopup>
    </>
  )
}
