import { LoopItem, Ref, style, use, WatchProp } from '@innet/dom'
import { useSlots } from '@innet/jsx'
import classes from 'html-classes'
import { State } from 'watch-state'

import { ElementPopup, PopupPlacement } from '../../popups'
import { Input, InputProps } from '../Input'
import { SelectorItem, SelectorItemProps } from '../SelectorItem'
import itemStyles from '../SelectorItem/SelectorItem.scss'
import { selectorContext } from './constants'
import styles from './Selector.scss'

const useStyle = style(styles)

export type SelectorDisplay = 'auto' | 'value'

export interface SelectorProps extends InputProps {
  values?: SelectorItemProps[]
  placement?: PopupPlacement
  searchValue?: WatchProp<string>
  showValues?: boolean
  display?: SelectorDisplay
  search?: boolean
  exact?: boolean
  arrow?: boolean
  onsearch?: (search: string) => void
}

export interface Preselect {
  value: string
  label?: string
}

export interface SelectorContext {
  value: WatchProp<string>
  setValue: (value: string, label?: string) => void
  setPreselect: (preselect: Preselect | undefined) => void
  preselect: () => Preselect | undefined
  hide: () => void
  showValues?: boolean
}

export function Selector ({
  ref = new Ref<HTMLLabelElement>(),
  placement,
  value,
  values,
  oninput,
  searchValue,
  showValues,
  display = 'auto',
  search,
  exact,
  arrow = exact,
  onsearch,
  ...props
}: SelectorProps = {}) {
  const { '': children, hint } = useSlots()
  const styles = useStyle()
  const show = new State(false)
  const preselect = new State<Preselect | undefined>()
  const popupRef = new Ref<HTMLDivElement>()

  if (!value) {
    const state = new State('')
    const oldOnChange = oninput
    value = () => state.value
    oninput = (value: string) => {
      state.value = value
      oldOnChange?.(value)
    }
  }

  if (!searchValue && search) {
    const state = new State('')
    const oldOnSearch = onsearch
    searchValue = () => state.value
    onsearch = (value: string) => {
      state.value = value
      oldOnSearch?.(value)
    }
  }

  const displayState = new State('')
  const displayValue = display === 'value' ? value : () => displayState.value
  const setValue = display === 'value'
    ? (val: string) => {
        displayState.value = val
        oninput?.(val)
      }
    : (val: string, lab?: string) => {
        displayState.value = val ? lab || val : ''
        oninput?.(val)
      }
  const hide = () => {
    show.value = false
    preselect.value = undefined
    onsearch?.('')
  }
  const selector: SelectorContext = {
    value,
    setValue,
    hide,
    setPreselect (value) {
      preselect.value = value
    },
    preselect: () => preselect.value,
    showValues,
  }

  const getActivePreselect = () => {
    const popup = popupRef.value

    if (!popup) return

    return popup.querySelector(`.${itemStyles.preselect}`) ||
      popup.querySelector(`.${itemStyles.selected}`)
  }
  const getAllItems = () => {
    const popup = popupRef.value

    if (!popup) return

    return popup.querySelectorAll(`.${itemStyles.root}`)
  }

  const nextPreselect = () => {
    const all = getAllItems()
    const active = getActivePreselect()

    if (!all) return

    const next: any = !active
      ? all[0]
      : (() => {
          for (let i = 0; i < all.length; i++) {
            if (all[i] === active) {
              if (i + 1 === all.length) {
                return all[0]
              }
              return all[i + 1]
            }
          }
        })()

    next?.preselect()
  }
  const prevPreselect = () => {
    const all = getAllItems()
    const active = getActivePreselect()

    if (!all) return

    const next: any = !active
      ? all[0]
      : (() => {
          for (let i = 0; i < all.length; i++) {
            if (all[i] === active) {
              if (i === 0) {
                return all[all.length - 1]
              }
              return all[i - 1]
            }
          }
        })()

    next?.preselect()
  }

  const valuesFilter = search
    ? () => values?.filter(({ value: val, label }: SelectorItemProps) => {
        const currentValue = (use(searchValue) || '').toLowerCase()

        if (label?.toLowerCase().includes(currentValue)) {
          return true
        }

        return (!label || showValues) && val.toLowerCase().startsWith(currentValue)
      }) || []
    : values

  return (
    <>
      <Input
        {...props}
        value={displayValue}
        oninput={setValue}
        onmousedown={(e: MouseEvent) => {
          if (!show.value) {
            show.value = true
          } else if (exact || search) {
            hide()
          }
          ;(props as any)?.onclick?.(e)
        }}
        onkeydown={(e: KeyboardEvent) => {
          if (e.key === 'Enter' && preselect.value) {
            const { value, label } = preselect.value
            e.preventDefault()
            setValue(value, label)
            hide()
          }
          ;(props.onkeydown as any)?.(e)
        }}
        renderInput={(props: any) => (
          <input
            {...props}
            class={() => classes([
              props.class,
              styles.input,
            ])}
            onkeydown={(e: KeyboardEvent) => {
              if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                e.preventDefault()

                if (show.value) {
                  if (e.key === 'ArrowDown') {
                    nextPreselect()
                  } else if (e.key === 'ArrowUp') {
                    prevPreselect()
                  }
                } else {
                  show.value = true
                }
              }
              props.onkeydown?.(e)
            }}
            placeholder={() => show.value && search ? use(props._value) : use(props.placeholder)}
            _value={() => show.value && search ? use(searchValue) || '' : use(props._value)}
            oninput={(e: any) => {
              if (show.value && search) {
                onsearch?.(e.target.value)

                if (!exact) {
                  props.oninput?.(e)
                }
              } else {
                props.oninput?.(e)
              }
            }}
            readOnly={!exact ? undefined : !search ? true : () => show.value ? undefined : true}
            onfocus={(e: any) => {
              show.value = true
              props?.onfocus?.(e)
            }}
            onblur={(e: any) => {
              hide()
              props?.onblur?.(e)
            }}
          />
        )}
        ref={ref}
        class={() => [
          styles.root,
          exact && styles.exact,
        ]}>
        {arrow && (
          <slot name='after'>
            <span
              onmousedown={(e: MouseEvent) => {
                e.preventDefault()
                e.stopPropagation()
                show.value = !show.value
              }}
              class={() => classes([
                styles.arrow,
                show.value && styles.arrowSelected,
              ])}
            />
          </slot>
        )}
        {hint && (
          <slot name='hint'>{hint}</slot>
        )}
      </Input>
      <ElementPopup
        ref={popupRef}
        placement={placement}
        show={() => show.value}
        class={styles.popup}
        element={ref}>
        <context for={selectorContext} set={selector}>
          <for of={valuesFilter || []} key='value'>
            {(item: LoopItem<SelectorItemProps>) => (
              <SelectorItem {...item.value} />
            )}
          </for>
          {children}
        </context>
      </ElementPopup>
    </>
  )
}
