import { For, inject, Show, type StateProp, style, use, type WatchProp } from '@innet/dom'
import classes from 'html-classes'
import { type Merge } from 'src/types'
import SyncTimer from 'sync-timer'
import { Cache, State, Watch } from 'watch-state'

import { Icon, type IconProp } from '../../icons'
import { Flex, type FlexElement, type FlexProps } from '../../layout'
import styles from './ToggleBar.scss'

const useStyle = style(styles)

export interface ToggleBarOption {
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
export type ToggleBarRenderValue = (item: ToggleBarOption, options: ToggleBarItemOptions) => any

export type ToggleBarProps <E extends FlexElement = FlexElement> = Merge<Omit<FlexProps<E>, 'children'>, {
  values: StateProp<ToggleBarOption[]>
  value?: StateProp<string> | State<string>
  width?: StateProp<string | number>
  renderValue?: ToggleBarRenderValue
  onchange?: ToggleBarOnChange
}>

export function defaultToggleBarRender ({ value, label, icon }: ToggleBarOption, {
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
      <Show when={icon}>
        <Icon size={26} icon={icon} />
      </Show>
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
  const focusIndex = new State<number>()

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

  let blurTimeout: SyncTimer

  const handleBlur = () => {
    blurTimeout = new SyncTimer(() => {
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
      <For of={values} key='value'>
        {(item, itemIndex) => {
          return (update: boolean) => {
            const option = use<ToggleBarOption>(item, update)

            return renderValue(option, {
              onchange: () => {
                onchange?.(option.value)
              },
              className: update => classes([
                styles.link,
                use(index, update) === use(itemIndex, update) && styles.active,
              ]),
              onblur: handleBlur,
              onfocus: () => {
                blurTimeout?.cancel()
                focusIndex.value = use(itemIndex)
              },
            })
          }
        }}
      </For>
    </Flex>
  )
}
