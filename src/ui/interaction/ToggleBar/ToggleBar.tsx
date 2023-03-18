import { inject, type LoopItem, type StateProp, style, use, type WatchProp } from '@innet/dom'
import classes from 'html-classes'
import { Cache, State, Watch } from 'watch-state'

import { Icon, type IconProp } from '../../icons'
import { Flex, type FlexProps } from '../../layout'
import styles from './ToggleBar.scss'

const useStyle = style(styles)

export interface ToggleBarValue {
  value: string
  label?: any
  icon?: IconProp
}

export type ToggleBarOnChange = (value: string) => void
export type ToggleBarItemAction = () => void
export interface ToggleBarItemOptions {
  className: WatchProp<string>
  onchange: ToggleBarItemAction
  onfocus: ToggleBarItemAction
  onblur: ToggleBarItemAction
}
export type ToggleBarRenderValue = (item: ToggleBarValue, options: ToggleBarItemOptions) => any

export type ToggleBarProps <E extends HTMLElement = HTMLElement> = FlexProps<E, {
  values: StateProp<ToggleBarValue[]>
  value?: StateProp<string>
  width?: StateProp<string | number>
  renderValue?: ToggleBarRenderValue
  onchange?: ToggleBarOnChange
}>

export function defaultToggleBarRender ({ value, label, icon }: ToggleBarValue, {
  className,
  onchange,
  onfocus,
  onblur,
}: ToggleBarItemOptions) {
  return (
    <span
      onfocus={onfocus}
      onblur={onblur}
      onmouseenter={onfocus}
      tabIndex={0}
      onkeydown={(e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onchange()
        }
      }}
      onmousedown={onchange}
      class={className}>
      <show state={icon}>
        <Icon size={26} icon={icon} />
      </show>
      {label || value}
    </span>
  )
}

export function ToggleBar ({
  values,
  value = new State(''),
  onchange,
  renderValue = defaultToggleBarRender,
  style,
  width,
  ...props
}: ToggleBarProps) {
  const styles = useStyle()

  if (value instanceof State) {
    const oldOnChange = onchange
    onchange = val => {
      value.value = val
      oldOnChange?.(val)
    }
  }

  const index = new Cache(() => {
    const val = use(value) || ''
    return use(values).findIndex(({ value }) => val === value)
  })
  const focusIndex = new State()

  new Watch(() => {
    focusIndex.value = index.value
  })

  let lastSideIndex = -1
  const side = new Cache(() => {
    const result = lastSideIndex > index.value
    lastSideIndex = index.value
    return result ? 'back' : 'forward'
  })

  let lastFocusIndex = -1
  const focusSide = new Cache(() => {
    const result = lastFocusIndex > focusIndex.value
    lastFocusIndex = focusIndex.value
    return result ? 'back' : 'forward'
  })

  let blurTimeout: any

  const handleBlur = () => {
    blurTimeout = setTimeout(() => {
      focusIndex.value = index.value
    })
  }

  return (
    <Flex
      element='nav'
      align='stretch'
      {...props}
      onmouseleave={handleBlur}
      style={{
        ...style,
        '--ui-toggle-bar-width': inject(width, width => typeof width === 'string' ? width : width ? `${width}px` : ''),
        '--ui-toggle-bar-count': inject(values, values => String(values.length)),
        '--ui-toggle-bar-focus': inject(focusIndex, String),
        '--ui-toggle-bar-index': inject(index, String),
      }}
      class={() => classes([
        styles.root,
        styles[side.value],
        styles[`${focusSide.value}Focus`],
      ])}>
      <div class={styles.focus} />
      <div class={styles.selected} />
      <for of={values} key='value'>
        {(item: LoopItem<ToggleBarValue>) => renderValue(item.value, {
          onchange: () => onchange?.(item.value.value),
          className: () => classes([
            styles.link,
            index.value === item.index && styles.active,
          ]),
          onblur: handleBlur,
          onfocus: () => {
            clearTimeout(blurTimeout)
            focusIndex.value = item.index
          },
        })}
      </for>
    </Flex>
  )
}
