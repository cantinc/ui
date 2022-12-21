import { LoopItem, StateProp, style, use } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import { State } from 'watch-state'

import { actionProp } from '../../../utils'
import { Listener } from '../../external'
import { Option } from '../../interaction/Option'
import { Dropdown, DropdownProps } from '../Dropdown'
import styles from './DropdownMenu.scss'

const useStyle = style(styles)

export interface MenuOption {
  value: string
  label?: string
}

export interface DropdownMenuProps extends DropdownProps {
  values?: StateProp<MenuOption[]>
  select?: StateProp<string>
  preselect?: StateProp<string>
  showValues?: boolean
  onSelect?: (value: string) => void
  onPreselect?: (value: string) => void
}

export function DropdownMenu ({
  values,
  showValues,
  select = new State(''),
  preselect = new State(''),
  onSelect,
  onPreselect,
  ...props
}: DropdownMenuProps) {
  const children = useChildren()
  const styles = useStyle()

  onSelect = actionProp(select, onSelect)
  onPreselect = actionProp(preselect, onPreselect)

  const nextPreselect = () => {
    if (!onPreselect) return

    const curValues = use(values)

    if (!curValues?.length) return

    const curPreselect = use(preselect)
    const index = curValues.findIndex(({ value }) => value === curPreselect)

    if (index === -1) {
      const curValue = use(select)
      const valueIndex = curValues.findIndex(({ value }) => value === curValue)
      const nextIndex = valueIndex >= curValues.length - 1 ? 0 : valueIndex + 1
      return onPreselect(valueIndex === -1 ? curValues[0].value : curValues[nextIndex].value)
    }

    if (index === curValues.length - 1) {
      return onPreselect(curValues[0].value)
    }

    onPreselect(curValues[index + 1].value)
  }

  const prevPreselect = () => {
    if (!onPreselect) return

    const curValues = use(values)

    if (!curValues?.length) return

    const curPreselect = use(preselect)
    const index = curValues.findIndex(({ value }) => value === curPreselect)

    if (index === -1) {
      const curValue = use(select)
      const valueIndex = curValues.findIndex(({ value }) => value === curValue)
      const nextIndex = valueIndex < 1 ? curValues.length - 1 : valueIndex - 1
      return onPreselect(curValues[nextIndex].value)
    }

    if (index === 0) {
      return onPreselect(curValues[curValues.length - 1].value)
    }

    onPreselect(curValues[index - 1].value)
  }

  const listener = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()

      if (e.key === 'ArrowDown') {
        nextPreselect()
      } else {
        prevPreselect()
      }
    }

    if (e.key === 'Enter') {
      const preselectValue = use(preselect)

      if (preselectValue) {
        e.preventDefault()
        onSelect?.(preselectValue)
      }
    }
  }

  return (
    <Dropdown
      vertical
      align='stretch'
      {...props}
      class={styles}>
      <Listener
        type='keydown'
        listener={listener}
      />
      <for of={values || []} key='value'>
        {(item: LoopItem<MenuOption>) => (
          <Option
            {...item.value}
            selected={() => use(select) === item.value.value}
            onSelect={() => onSelect?.(item.value.value)}
            preselected={() => use(preselect) === item.value.value}
            onPreselect={() => onPreselect?.(item.value.value)}
            showValues={showValues}
          />
        )}
      </for>
      {children}
    </Dropdown>
  )
}
