import { StateProp, style, use, WatchProp } from '@innet/dom'
import classes from 'html-classes'
import { Cache, State } from 'watch-state'

import { Flex, FlexProps } from '../../layout'
import styles from './ToggleBar.scss'

const useStyle = style(styles)

export interface ToggleBarValue {
  value: string
  label?: any
}

export type ToggleBarOnChange = (value: string) => void
export type ToggleBarChangeHandler = () => void
export type ToggleBarRenderValue = (item: ToggleBarValue, className: WatchProp<string>, onchange: ToggleBarChangeHandler) => any

export type ToggleBarProps <E extends HTMLElement = HTMLElement> = FlexProps<E, {
  values?: ToggleBarValue[]
  value?: StateProp<string>
  renderValue?: ToggleBarRenderValue
  onchange?: ToggleBarOnChange
}>

export function defaultToggleBarRender ({ value, label }: ToggleBarValue, className: WatchProp<string>, onchange: ToggleBarChangeHandler) {
  return (
    <span
      onclick={onchange}
      class={className}>
      {label ?? value}
    </span>
  )
}

export function ToggleBar ({
  values = [],
  value = new State(values?.[0]?.value || ''),
  onchange,
  renderValue = defaultToggleBarRender,
  style = '',
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
    return values.findIndex(({ value }) => val === value)
  })

  let lasIndex = -1
  const side = new Cache(() => {
    const result = lasIndex > index.value
    lasIndex = index.value
    return result ? 'back' : 'forward'
  })

  const selectStyle = new Cache(() => {
    if (index.value === -1) {
      return ''
    }

    return `--ui-toggle-bar-index:${index.value};`
  })

  return (
    <Flex
      element='nav'
      gap={16}
      align='stretch'
      {...props}
      style={() => `${selectStyle.value}--ui-toggle-bar-count:${values.length};${use(style)}`}
      class={() => classes([
        styles.root,
        styles[side.value],
      ])}>
      <div class={styles.selected} />
      {values.map(item => renderValue(item, () => classes([
        styles.link,
        use(value) === item.value && styles.active,
      ]), () => onchange?.(item.value)))}
    </Flex>
  )
}
