import { Delay, Ref, Show, type StateProp, style, use, useShow } from '@innet/dom'
import classes from 'html-classes'
import { useUITranslations } from 'src/hooks'
import { Cache, createEvent, onDestroy, State, unwatch } from 'watch-state'

import { actionProp, dateMinMax, getDaysInMonth, getMonth, windowHeight, windowWidth } from '../../../utils'
import { Button, Buttons } from '../../buttons'
import { Icon } from '../../icons'
import { Calendar, type CalendarGridCell } from '../../interaction/Calendar'
import { CalendarTitle } from '../../interaction/CalendarTitle'
import { Flex, Space } from '../../layout'
import { Modal, type ModalProps } from '../Modal'
import styles from './DatePicker.scss'

const useStyle = style(styles)

export type DataPickerSelector = 'date' | 'month' | 'year'

const today = new Date()
const todayYear = today.getFullYear()
const todayMonth = today.getMonth()

export const dataPickerCellHeight = new Cache<number>(() => {
  return windowWidth.value < 768 ? (windowHeight.value - 290) / 6 : 57
})

export interface DatePickerProps extends Omit<ModalProps, 'content' | 'title'> {
  selector?: State<DataPickerSelector>
  value?: StateProp<Date>
  defaultValue?: StateProp<Date | undefined>
  onChange?: (date: Date) => void
  onApply?: (date: Date) => void
  apply?: any
  rotationTop?: State<boolean>
  min?: Date
  max?: Date
}

export function DatePicker ({
  apply,
  min,
  max,
  selector = new State('date'),
  defaultValue = today,
  value = new State(dateMinMax(unwatch(() => use(defaultValue) || today), min, max)),
  onChange,
  rotationTop = new State(true),
  onApply,
  children,
  ...props
}: DatePickerProps = {}) {
  const [goBackTranslation, todayTranslation] = useUITranslations('date-picker_go-back', 'date-picker_today')
  onChange = actionProp(value, onChange)

  min = min && new Date(min.getFullYear(), min.getMonth(), min.getDate())
  max = max && new Date(max.getFullYear(), max.getMonth(), max.getDate())

  const styles = useStyle()
  const isYearSelectable = !(min && max && min.getFullYear() === max.getFullYear())
  const showCustomGrid = new Cache(() => selector.value !== 'date')

  const handleDisable = ({ date }: CalendarGridCell) => {
    if (min && date < min) {
      return true
    }

    if (max && date > max) {
      return true
    }

    return false
  }
  const handleSelect = ({ date }: CalendarGridCell) => {
    const currentValue = use(value)

    return currentValue.getDate() === date.getDate() &&
      currentValue.getMonth() === date.getMonth() &&
      currentValue.getFullYear() === date.getFullYear()
  }

  const handleNext = () => {
    const date = use(value)
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const nextDate = new Date(year, month + 1, -1)

    if (max && max < new Date(year, month, day)) {
      onChange?.(new Date(year, month, max.getDate()))
    } else if (getDaysInMonth(nextDate) < day) {
      onChange?.(new Date(year, month, getDaysInMonth(nextDate)))
    }
  }

  const handlePrev = () => {
    const date = use(value)
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const prevDate = new Date(year, month + 1, -1)

    if (min && min > new Date(year, month, day)) {
      onChange?.(new Date(year, month, min.getDate()))
    } else if (getDaysInMonth(prevDate) < day) {
      onChange?.(new Date(year, month, getDaysInMonth(prevDate)))
    }
  }

  const handleTitleClick = () => {
    if (isYearSelectable) {
      selector.value = 'year'
    } else {
      selector.value = 'month'
    }
  }

  const handleSelectDate = createEvent(({ date }: CalendarGridCell) => {
    const curDate = use(value)

    if (date === curDate) return

    const year = curDate.getFullYear()
    const month = curDate.getMonth()
    const newMonth = date.getMonth()
    const newYear = date.getFullYear()

    if (month !== newMonth) {
      rotationTop.value = month > newMonth
    }

    if (year !== newYear) {
      rotationTop.value = year > newYear
    }

    onChange?.(date)
  })

  const renderContent = (update: boolean) => {
    const show = update && useShow()
    const hide = new Ref<State<boolean>>()
    const isCustom = showCustomGrid.value

    const classNames = () => classes([
      styles.contentWrapper,
      isCustom && styles.rightContent,
      (!show || show.value) && styles.contentShow,
      hide.value?.value && styles.contentHide,
    ])

    if (!isCustom) {
      return (
        <Delay ref={hide} hide={300}>
          <div class={classNames}>
            <Space />
            <Calendar
              cellHeight={dataPickerCellHeight}
              onselect={handleSelectDate}
              class={{
                cell: () => styles.cell,
                gridWrapper: () => styles.gridWrapper,
              }}
              value={value}
              rotationTop={rotationTop}
              selectedHandler={handleSelect}
              disableHandler={handleDisable}>
              <CalendarTitle
                onClick={handleTitleClick}
                onNext={handleNext}
                onPrev={handlePrev}
                min={min}
                max={max}
                rotationTop={rotationTop}
                value={value}
                onChange={onChange}
              />
            </Calendar>
            <Space gap={apply && 24} />
            <Show when={apply}>
              <Buttons>
                <Button
                  onclick={() => {
                    onApply?.(use(value))
                  }}
                  flex>
                  {apply}
                </Button>
              </Buttons>
            </Show>
          </div>
        </Delay>
      )
    }

    const renderMonth = () => {
      const show = useShow()
      const hide = new Ref<State<boolean>>()

      return (
        <Delay ref={hide} hide={300}>
          <div class={() => classes([
            styles.monthGrid,
            show.value && styles.monthGridShow,
            hide.value?.value && styles.monthGridHide,
          ])}>
            {[...new Array(12)].map((_, i) => (
              <div
                onclick={() => {
                  const date = use(value)

                  onChange?.(new Date(date.getFullYear(), i, date.getDate()))

                  if (i > date.getMonth()) {
                    handleNext()
                  } else {
                    handlePrev()
                  }

                  selector.value = 'date'
                }}
                class={() => classes([
                  styles.cellCustom,
                  use(value).getMonth() === i && styles.cellSelected,
                  use(value).getFullYear() === todayYear && i === todayMonth && styles.cellToday,
                  use(value).getFullYear() === min?.getFullYear() && min.getMonth() > i && styles.cellDisabled,
                  use(value).getFullYear() === max?.getFullYear() && max.getMonth() < i && styles.cellDisabled,
                ])}>
                {getMonth(i, 'short')}
              </div>
            ))}
          </div>
        </Delay>
      )
    }

    const renderYear = () => {
      const minYear = min ? min.getFullYear() : 1900
      const maxYear = max ? max.getFullYear() : 2050
      const hide = new Ref<State<boolean>>()
      const show = useShow()

      const availableYears = maxYear - minYear + 1
      let before = 0
      let after = 0

      if (availableYears < 28) {
        const half = (28 - availableYears) / 2
        if (half % 1) {
          before = half | 0
          after = (half | 0) + 1
        } else {
          before = after = half
        }
      }

      return (
        <Delay ref={hide} hide={300}>
          <div class={() => classes([
            styles.yearGrid,
            show.value && styles.yearGridShow,
            hide.value?.value && styles.yearGridHide,
          ])}>
            {[...new Array(before)].map((_, i) => {
              const currentYear = minYear - before + i

              return (
                <div
                  class={() => classes([
                    styles.cellCustom,
                    styles.cellDisabled,
                    use(value).getFullYear() === currentYear && styles.cellSelected,
                    currentYear === todayYear && styles.cellToday,
                  ])}>
                  {currentYear}
                </div>
              )
            })}
            {[...new Array(availableYears)].map((_, i) => {
              const currentYear = minYear + i
              const ref = new Ref<HTMLDivElement>()

              if (unwatch(() => use(value).getFullYear()) === currentYear) {
                const timer = setTimeout(() => {
                  ref.value?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  })
                }, 500)

                onDestroy(() => {
                  clearTimeout(timer)
                })
              }

              return (
                <div
                  ref={ref}
                  onclick={() => {
                    const date = use(value)
                    onChange?.(new Date(currentYear, date.getMonth(), date.getDate()))
                    selector.value = 'month'
                  }}
                  class={() => classes([
                    styles.cellCustom,
                    use(value).getFullYear() === currentYear && styles.cellSelected,
                    currentYear === todayYear && styles.cellToday,
                  ])}>
                  {currentYear}
                </div>
              )
            })}
            {[...new Array(after)].map((_, i) => {
              const currentYear = minYear + availableYears + i

              return (
                <div
                  class={() => classes([
                    styles.cellCustom,
                    styles.cellDisabled,
                    use(value).getFullYear() === currentYear && styles.cellSelected,
                    currentYear === todayYear && styles.cellToday,
                  ])}>
                  {currentYear}
                </div>
              )
            })}
          </div>
        </Delay>
      )
    }

    return (
      <Delay ref={hide} hide={300}>
        <div class={classNames}>
          <Flex
            padding={[28, 8]}
            class={() => styles.contentHeader}>
            <button
              class={() => styles.contentHeaderButton}
              onclick={() => {
                selector.value = 'date'
              }}>
              <Icon icon='arrowLeft' />
              {goBackTranslation}
            </button>
            <Space />
            <button
              class={() => styles.contentHeaderButton}
              onclick={createEvent(() => {
                onChange?.(dateMinMax(today, min, max))
                selector.value = 'date'
              })}>
              {todayTranslation}
            </button>
          </Flex>
          <div class={() => styles.contentGridWrapper}>
            {() => selector.value === 'date' ? null : selector.value === 'month' ? renderMonth() : renderYear()}
          </div>
        </div>
      </Delay>
    )
  }

  return (
    <Modal
      width={480}
      {...props}
      title={children}
      content={renderContent}
      class={{
        root: () => styles.root,
        content: () => styles.content,
      }}
    />
  )
}
