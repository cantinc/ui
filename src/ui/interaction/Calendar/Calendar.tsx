import { inject, LoopItem, pushSync, StateProp, style, use } from '@innet/dom'
import classes from 'html-classes'
import { Cache, createEvent, State, unwatch, Watch } from 'watch-state'

import { getDaysInMonth, getWeek, inputDateFormat } from '../../../utils'
import { Flex, FlexProps } from '../../layout'
import { CalendarTitle } from '../CalendarTitle'
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
  renderCell?: (date: LoopItem<CalendarGridCell>) => any
  cellHeight?: StateProp<number>
  onselect?: (date: string) => void
}

export const defaultCalendarCellRender = (item: LoopItem<CalendarGridCell>): any => {
  return new Cache(() => item.value.date.getDate())
}

export function * Calendar ({
  activeHandler,
  disableHandler,
  selectedHandler,
  cellHeight = 48,
  renderCell = defaultCalendarCellRender,
  onselect,
  selector = new State('date'),
  year = new State(new Date().getFullYear()),
  month = new State(new Date().getMonth()),
  ...props
}: CalendarProps = {}) {
  const styles = useStyle()
  let position = -42
  const rotationTop = new State(true)
  const stopAnimation = new State(false)
  const top = new State(0)
  const margin = new State(0)

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

  yield (
    <Flex
      {...props}
      vertical
      align='stretch'
      class={() => styles.root}>
      <CalendarTitle
        rotationTop={rotationTop}
        year={year}
        month={month}
        onPrev={handlePrev}
        onNext={handleNext}
      />
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
          <for of={grid} key='value'>
            {(item: LoopItem<CalendarGridCell>) => {
              if (unwatch(() => rotationTop.value)) {
                position--
              } else {
                position++
              }

              return (
                <delay hide={300}>
                  <span
                    class={() => classes([
                      styles.cell,
                      styles.cell,
                      item.value.current && styles.cellCurrent,
                      activeHandler?.(item.value.date) && styles.active,
                      disableHandler?.(item.value.date) && styles.disabled,
                      selectedHandler?.(item.value.date) && styles.selected,
                    ])}>
                    {() => renderCell(item)}
                  </span>
                </delay>
              )
            }}
          </for>
        </div>
      </div>
    </Flex>
  )

  let timer: any

  new Watch((update) => {
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

        setTimeout(() => {
          pushSync(() => {
            margin.value = nextValue
          })
        }, 300)
      }
    })

    return grid.value
  })
}
