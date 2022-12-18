import { LoopItem, Ref, StateProp, style, use } from '@innet/dom'
import { useSlots } from '@innet/jsx'
import classes from 'html-classes'
import { Cache, State } from 'watch-state'

import { Arrow } from '../../content'
import { ElementPopup, PopupPlacement } from '../../popups'
import { Input, InputProps } from '../Input'
import { SelectorItem, SelectorItemProps } from '../SelectorItem'
import itemStyles from '../SelectorItem/SelectorItem.scss'
import { selectorContext } from './constants'
import styles from './Selector.scss'

const useStyle = style(styles)

export type SelectorDisplay = 'auto' | 'value'

export interface SelectorProps extends InputProps {
  values?: StateProp<SelectorItemProps[]>
  placement?: PopupPlacement
  searchValue?: StateProp<string>
  showValues?: boolean
  display?: SelectorDisplay
  search?: boolean
  exact?: boolean
  arrow?: boolean
  displayState?: State<string>
  onsearch?: (search: string) => void
}

export interface Preselect {
  value: string
  label?: string
}

export interface SelectorContext {
  value: StateProp<string>
  setValue?: (value: string) => void
  setPreselect: (preselect: Preselect | undefined) => void
  preselect: () => Preselect | undefined
  hide: () => void
  showValues?: boolean
}

export function Selector ({
  ref = new Ref<HTMLLabelElement>(),
  placement,
  value = new State(''),
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
  const { hint } = useSlots()
  const styles = useStyle()
  const show = new State(false)
  const preselect = new State<Preselect | undefined>()
  const popupRef = new Ref<HTMLDivElement>()

  if (value instanceof State) {
    oninput = (val: string) => {
      value.value = val
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

  const displayValue = display === 'value'
    ? value
    : new Cache(() => {
      const currentValue = use(value) || ''
      const currentValues = use(values)

      if (!currentValues) return currentValue

      const currentItem = currentValues.find(({ value }) => value === currentValue)

      return currentItem ? currentItem.label || currentValue : currentValue
    })

  const hide = () => {
    show.value = false
    preselect.value = undefined
    onsearch?.('')
  }
  const selector: SelectorContext = {
    value,
    setValue: oninput,
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

  const valuesFilter = !values
    ? []
    : search
      ? () => use(values).filter(({ value: val, label }: SelectorItemProps) => {
          const currentValue = (use(searchValue) || '').toLowerCase()

          if (label?.toLowerCase().includes(currentValue)) {
            return true
          }

          return (!label || showValues) && val.toLowerCase().startsWith(currentValue)
        }) || []
      : () => use(values)

  return (
    <>
      <Input
        {...props}
        value={displayValue}
        oninput={oninput}
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
            const { value } = preselect.value
            e.preventDefault()
            oninput?.(value)
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
            <Arrow
              top={show}
              onmousedown={(e: MouseEvent) => {
                e.preventDefault()
                e.stopPropagation()
                show.value = !show.value
              }}
            />
          </slot>
        )}
        {hint && (
          <slot name='hint'>{hint}</slot>
        )}
      </Input>
      <ElementPopup
        vertical
        align='stretch'
        ref={popupRef}
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
      </ElementPopup>
    </>
  )
}
