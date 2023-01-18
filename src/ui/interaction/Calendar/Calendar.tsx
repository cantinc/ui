import { LoopItem, style } from '@innet/dom'
import classes from 'html-classes'
import { Cache, createEvent, State } from 'watch-state'

import { getDaysInMonth, getMonth, getWeek, inputDateFormat } from '../../../utils'
import { Icon } from '../../icons'
import { Flex, FlexProps } from '../../layout'
import styles from './Calendar.scss'

const useStyle = style(styles)

export type CalendarSelector = 'date' | 'month' | 'year'

export interface CalendarGridCell {
  value: string
  date: Date
  disabled: boolean
  active: boolean
  selected: boolean
  current: boolean
}

export interface CalendarProps extends Omit<FlexProps, 'onselect'> {
  selector?: State<CalendarSelector>
  year?: State<number>
  month?: State<number>
  activeHandler?: (date: Date) => boolean
  selectedHandler?: (date: Date) => boolean
  disableHandler?: (date: Date) => boolean
  renderCell?: (date: CalendarGridCell) => any
  onselect?: (date: string) => void
}

export const defaultCalendarCellRender = ({ date }: CalendarGridCell) => {
  return date.getDate()
}

export function Calendar ({
  activeHandler,
  disableHandler,
  selectedHandler,
  renderCell = defaultCalendarCellRender,
  onselect,
  selector = new State('date'),
  year = new State(new Date().getFullYear()),
  month = new State(new Date().getMonth()),
  ...props
}: CalendarProps = {}) {
  const styles = useStyle()

  const createCell = (date: Date, current = false) => {
    return {
      date,
      value: inputDateFormat(date),
      current,
      disabled: disableHandler?.(date) || false,
      active: activeHandler?.(date) || false,
      selected: selectedHandler?.(date) || false,
    }
  }

  const grid = new Cache<CalendarGridCell[]>(() => {
    const firstDate = new Date(year.value, month.value, 1)
    const deltaBeforeTemp = firstDate.getDay() - 1
    const deltaBefore = deltaBeforeTemp === -1 ? 6 : deltaBeforeTemp
    const countDays = getDaysInMonth(firstDate)
    const deltaAfterTemp = 7 - ((countDays + deltaBefore) % 7)
    const deltaAfterTemp2 = deltaAfterTemp === 7 ? 0 : deltaAfterTemp
    const deltaAfter = deltaBefore + countDays + deltaAfterTemp2 < 42 ? deltaAfterTemp2 + 7 : deltaAfterTemp2
    const grid: CalendarGridCell[] = []
    const currentYear = year.value
    const currentMonth = month.value
    const currentBeforeDataStart = new Date(year.value, month.value, 0).getDate()
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

  const handleNext = createEvent(() => {
    if (month.value > 10) {
      month.value = 0
      year.value++
    } else {
      month.value++
    }
  })

  const handlePrev = createEvent(() => {
    if (month.value < 1) {
      month.value = 11
      year.value--
    } else {
      month.value--
    }
  })

  return (
    <Flex
      {...props}
      vertical
      align='stretch'
      class={() => styles.root}>
      <div class={() => styles.title}>
        <Icon
          onclick={handlePrev}
          icon='chevronLeft'
          tabIndex={0}
          class={() => styles.arrow}
        />
        <span tabIndex={0} class={() => styles.date}>
          {() => getMonth(month.value)}
          {year}
        </span>
        <Icon
          onclick={handleNext}
          icon='chevronRight'
          tabIndex={0}
          class={() => styles.arrow}
        />
      </div>
      <div class={() => styles.week}>
        {[...new Array(7)].map((_, i) => (
          <span class={() => styles.weekCell}>
            {getWeek(i + 1, 'short')}
          </span>
        ))}
      </div>
      <div class={() => styles.grid}>
        <for of={grid} key='value'>
          {(item: LoopItem<CalendarGridCell>) => (
            <span class={() => classes([
              styles.cell,
              styles.cell,
              item.value.current && styles.cellCurrent,
              activeHandler?.(item.value.date) && styles.active,
              disableHandler?.(item.value.date) && styles.disabled,
              selectedHandler?.(item.value.date) && styles.selected,
            ])}>
              {() => renderCell(item.value)}
            </span>
          )}
        </for>
      </div>
    </Flex>
  )
}
