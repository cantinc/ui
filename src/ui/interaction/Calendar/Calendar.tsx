import { inject, type ObservableProp, type StateProp, style, use, useMapValue } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import classes from 'html-classes'
import SyncTimer from 'sync-timer'
import { Cache, State, unwatch, Watch } from 'watch-state'

import { getDaysInMonth, getWeek, inputDateFormat } from '../../../utils'
import { Flex, type FlexProps } from '../../layout'
import styles from './Calendar.scss'

const useStyle = style(styles)

const today = new Date()

const todayYear = today.getFullYear()
const todayMonth = today.getMonth()
const todayDay = today.getDate()

export interface CalendarGridCell {
  value: string
  date: Date
  current: boolean
}

export interface CalendarProps extends Omit<FlexProps, 'onselect'> {
  value?: StateProp<Date>
  rotationTop?: State<boolean>
  activeHandler?: (date: CalendarGridCell) => boolean
  selectedHandler?: (date: CalendarGridCell) => boolean
  disableHandler?: (date: CalendarGridCell) => boolean
  renderCell?: (date: ObservableProp<CalendarGridCell>) => any
  cellHeight?: StateProp<number>
  onselect?: (cell: CalendarGridCell) => void
}

export const defaultCalendarCellRender = (item: ObservableProp<CalendarGridCell>): any => {
  return new Cache(() => use(item).date.getDate())
}

const isToday = (date: Date) => {
  return date.getDate() === todayDay && date.getFullYear() === todayYear && date.getMonth() === todayMonth
}

export function * Calendar ({
  activeHandler,
  disableHandler,
  selectedHandler,
  cellHeight = 48,
  renderCell = defaultCalendarCellRender,
  onselect,
  value = new State(today),
  rotationTop = new State(true),
  ...props
}: CalendarProps = {}) {
  const children = useChildren()
  const styles = useStyle()
  let position = -42
  const stopAnimation = new State(false)
  const top = new State(0)
  const margin = new State(0)

  const createCell = (date: Date, current = false) => {
    const value = inputDateFormat(date)

    return {
      date,
      value,
      current,
    }
  }

  const grid = new Cache<CalendarGridCell[]>(() => {
    const date = use(value)
    const currentYear = date.getFullYear()
    const currentMonth = date.getMonth()
    const firstDate = new Date(currentYear, currentMonth, 1)
    const deltaBeforeTemp = firstDate.getDay() - 1
    const deltaBefore = deltaBeforeTemp === -1 ? 6 : deltaBeforeTemp
    const countDays = getDaysInMonth(firstDate)
    const deltaAfterTemp = 7 - ((countDays + deltaBefore) % 7)
    const deltaAfterTemp2 = deltaAfterTemp === 7 ? 0 : deltaAfterTemp
    const deltaSum = deltaBefore + countDays + deltaAfterTemp2
    const deltaAfter = deltaSum >= 42 ? deltaAfterTemp2 : deltaSum === 28 ? deltaAfterTemp2 + 14 : deltaAfterTemp2 + 7
    const grid: CalendarGridCell[] = []
    const currentBeforeDataStart = new Date(currentYear, currentMonth, 0).getDate()
    const currentDeltaBefore = deltaBefore
    const currentDeltaAfter = deltaAfter
    const currentCountDays = countDays

    for (let i = 0; i < currentDeltaBefore; i++) {
      grid.push(createCell(new Date(
        currentYear,
        currentMonth - 1,
        currentBeforeDataStart - currentDeltaBefore + i + 1,
        1,
      )))
    }

    for (let i = 0; i < currentCountDays; i++) {
      grid.push(createCell(new Date(
        currentYear,
        currentMonth,
        i + 1,
      ), true))
    }

    for (let i = 0; i < currentDeltaAfter; i++) {
      grid.push(createCell(new Date(
        currentYear,
        currentMonth + 1,
        i + 1,
      )))
    }

    return grid
  })

  const Item = () => {
    const item = useMapValue<CalendarGridCell>()

    if (unwatch(() => rotationTop.value)) {
      position--
    } else {
      position++
    }

    return (
      <delay hide={300}>
        <span
          onclick={() => onselect?.(use(item))}
          class={() => classes([
            styles.cell,
            isToday(use(item).date) && styles.today,
            use(item).current && styles.cellCurrent,
            activeHandler?.(use(item)) && styles.active,
            disableHandler?.(use(item)) && styles.disabled,
            selectedHandler?.(use(item)) && styles.selected,
          ])}>
          {() => renderCell(item)}
        </span>
      </delay>
    )
  }

  yield (
    <Flex
      {...props}
      vertical
      align='stretch'
      class={() => styles.root}>
      {children}
      <div class={() => styles.week}>
        {[...new Array(7)].map((_, i) => (
          <span class={() => styles.weekCell}>
            {getWeek(i + 1, 'short')}
          </span>
        ))}
      </div>
      <div
        style={{
          '--ui-calendar-cell-height': inject(cellHeight, height => `${height}px`),
        }}
        class={() => styles.gridWrapper}>
        <div
          style={{
            transition: () => stopAnimation.value ? 'none' : '',
            'margin-top': () => `${margin.value}px`,
            top: () => `${top.value}px`,
          }}
          class={() => styles.grid}>
          <map of={grid} key='value'>
            <Item />
          </map>
        </div>
      </div>
    </Flex>
  )

  let timer: any

  new Watch(update => {
    const height = use(cellHeight)

    if (update) {
      stopAnimation.value = true
      top.value = position / 7 * -1 * height
      margin.value = position / 7 * height

      clearTimeout(timer)

      timer = setTimeout(() => {
        stopAnimation.value = false
      }, 100)
    }
  })

  new Watch(() => {
    unwatch(() => {
      const height = use(cellHeight)
      top.value = position / 7 * -1 * height

      if (rotationTop.value) {
        margin.value = position / 7 * height
      } else {
        const nextValue = position / 7 * height

        new SyncTimer(() => {
          margin.value = nextValue
        }, 300)
      }
    })

    return grid.value
  })
}
