import { LoopItem, StateProp, style, use } from '@innet/dom'
import { State } from 'watch-state'

import { actionProp } from '../../../utils'
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
  preselect?: StateProp<string>
  onPreselect?: (value: string) => void
  select?: StateProp<string>
  onSelect?: (value: string) => void
  showValues?: boolean
}

export function DropdownMenu ({
  values,
  showValues,
  preselect = new State(''),
  onPreselect,
  select = new State(''),
  onSelect,
  ...props
}: DropdownMenuProps) {
  const styles = useStyle()

  onSelect = actionProp(select, onSelect)
  onPreselect = actionProp(preselect, onPreselect)

  return (
    <Dropdown
      vertical
      align='stretch'
      {...props}
      class={styles}>
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
    </Dropdown>
  )
}
