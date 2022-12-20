import { Ref, StateProp, style, use } from '@innet/dom'
import { useSlots } from '@innet/jsx'
import classes from 'html-classes'
import { Cache, State } from 'watch-state'

import { Arrow } from '../../icons'
import { DropdownMenu, DropdownPlacement, MenuOption } from '../../popups'
import { Input, InputProps } from '../Input'
import styles from './Selector.scss'

const useStyle = style(styles)

export type SelectorDisplay = 'auto' | 'value'

export interface SelectorProps extends InputProps {
  values?: StateProp<MenuOption[]>
  placement?: DropdownPlacement
  searchValue?: StateProp<string>
  showValues?: boolean
  display?: SelectorDisplay
  search?: boolean
  exact?: boolean
  arrow?: boolean
  displayState?: State<string>
  onsearch?: (search: string) => void
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
  const { hint, after } = useSlots()
  const styles = useStyle()
  const show = new State(false)
  const preselect = new State<string>('')
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
    preselect.value = ''
    onsearch?.('')
  }

  const valuesFilter = !values
    ? []
    : search
      ? () => use(values).filter(({ value: val, label }) => {
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
        renderInput={(props: any) => (
          <input
            {...props}
            class={() => classes([
              props.class,
              styles.input,
            ])}
            onkeydown={(e: KeyboardEvent) => {
              if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                if (!show.value) {
                  e.preventDefault()
                  e.stopPropagation()
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
        {arrow
          ? (
            <slot name='after'>
              <Arrow
                direction={() => use(show) ? 'top' : 'down'}
                onmousedown={(e: MouseEvent) => {
                  e.preventDefault()
                  e.stopPropagation()
                  show.value = !show.value
                }}
              />
            </slot>
            )
          : after && (<slot name='after'>{after}</slot>)}
        {hint && (
          <slot name='hint'>{hint}</slot>
        )}
      </Input>
      <DropdownMenu
        ref={popupRef}
        placement={placement}
        show={show}
        element={ref}
        values={valuesFilter}
        preselect={preselect}
        select={value}
        showValues={showValues}
        onSelect={(val) => {
          oninput?.(val)
          hide()
        }}
      />
    </>
  )
}
