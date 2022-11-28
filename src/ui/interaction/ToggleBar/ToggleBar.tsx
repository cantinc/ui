import { style, use, WatchProp } from '@innet/dom'
import classes from 'html-classes'
import { Cache } from 'watch-state'

import { Flex, FlexProps } from '../../position'
import styles from './ToggleBar.scss'

const useStyle = style(styles)

export interface ToggleBarValue {
  value: string
  label?: any
}

export type ToggleBarOnChange = (value: string) => void
export type ToggleBarChangeHandler = () => void
export type ToggleBarRenderValue = (item: ToggleBarValue, className: WatchProp<string>, onchange: ToggleBarChangeHandler) => any

export type ToggleBarProps <E extends HTMLElement = HTMLElement> = FlexProps<E> & {
  values: ToggleBarValue[]
  value: () => string
  renderValue?: ToggleBarRenderValue
  onchange?: ToggleBarOnChange
}

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
  values,
  value,
  onchange,
  renderValue = defaultToggleBarRender,
  style = '',
  ...props
}: ToggleBarProps) {
  const styles = useStyle()

  const index = new Cache(() => {
    const val = value() || ''
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
        value() === item.value && styles.active,
      ]), () => onchange?.(item.value)))}
    </Flex>
  )
}
