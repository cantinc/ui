import { Ref, StateProp, style, useShow } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import classes from 'html-classes'
import { Cache, createEvent, State } from 'watch-state'

import { getDaysInMonth, getMonth, windowHeight, windowWidth } from '../../../utils'
import { Button, Buttons } from '../../buttons'
import { Icon } from '../../icons'
import { Calendar, CalendarGridCell } from '../../interaction/Calendar'
import { CalendarTitle } from '../../interaction/CalendarTitle'
import { Flex, Space } from '../../layout'
import { Modal, ModalProps } from '../Modal'
import styles from './DatePicker.scss'

const useStyle = style(styles)

export type DataPickerSelector = 'date' | 'month' | 'year'

const today = new Date()
const todayYear = today.getFullYear()
const todayMonth = today.getMonth()
const todayDay = today.getDate()

export const dataPickerCellHeight = new Cache<number>(() => {
  return windowWidth.value < 768 ? (windowHeight.value - 285) / 6 : 57
})

export interface DatePickerProps extends ModalProps {
  selector?: State<DataPickerSelector>
  year?: State<number>
  month?: State<number>
  day?: State<number>
  apply?: any
  rotationTop?: State<boolean>
  min?: Date
  max?: Date
  value?: StateProp<string>
  goBackText?: any
  todayText?: any
  onChange?: (value: string) => void
}

export function DatePicker ({
  apply,
  selector = new State('date'),
  year = new State(todayYear),
  month = new State(todayMonth),
  day = new State(todayDay),
  rotationTop = new State(true),
  min,
  max,
  goBackText,
  todayText,
  ...props
}: DatePickerProps = {}) {
  const children = useChildren()
  const styles = useStyle()
  const isYearSelectable = !(min && max && min.getFullYear() === max.getFullYear())

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
    return day.value === date.getDate() && month.value === date.getMonth()
  }

  const handleNext = () => {
    const currentDate = new Date(year.value, month.value + 1, -1)

    if (max && max < new Date(year.value, month.value, day.value)) {
      day.value = max.getDate()
    } else if (getDaysInMonth(currentDate) < day.value) {
      day.value = getDaysInMonth(currentDate)
    }
  }

  const handlePrev = () => {
    const currentDate = new Date(year.value, month.value + 1, -1)

    if (min && min > new Date(year.value, month.value, day.value)) {
      day.value = min.getDate()
    } else if (getDaysInMonth(currentDate) < day.value) {
      day.value = getDaysInMonth(currentDate)
    }
  }

  const handleTitleClick = () => {
    if (isYearSelectable) {
      selector.value = 'year'
    } else {
      selector.value = 'month'
    }
  }

  const handleSelectDate = ({ date }: CalendarGridCell) => {
    const newMonth = date.getMonth()

    if (month.value !== newMonth) {
      rotationTop.value = month.value > newMonth
      month.value = date.getMonth()
    }

    day.value = date.getDate()
  }

  const renderContent = (update: boolean) => {
    const show = update && useShow()
    const hide = new Ref<State<boolean>>()
    const currentSelector = selector.value

    const classNames = () => classes([
      styles.contentWrapper,
      currentSelector !== 'date' && styles.rightContent,
      (!show || show.value) && styles.contentShow,
      hide.value?.value && styles.contentHide,
    ])

    if (currentSelector === 'date') {
      return (
        <delay ref={hide} hide={300}>
          <div class={classNames}>
            <Space />
            <Calendar
              cellHeight={dataPickerCellHeight}
              onselect={handleSelectDate}
              class={{
                cell: () => styles.cell,
                gridWrapper: () => styles.gridWrapper,
              }}
              year={year}
              month={month}
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
                year={year}
                month={month}
              />
            </Calendar>
            <Space gap={apply && 24} />
            <show state={apply}>
              <Buttons>
                <Button flex>
                  {apply}
                </Button>
              </Buttons>
            </show>
          </div>
        </delay>
      )
    }

    const renderMonth = () => {
      return (
        <div class={() => styles.monthGrid}>
          {[...new Array(12)].map((_, i) => (
            <div
              onclick={() => {
                if (i > month.value) {
                  month.value = i
                  handleNext()
                } else {
                  month.value = i
                  handlePrev()
                }

                selector.value = 'date'
              }}
              class={() => classes([
                styles.cellCustom,
                month.value === i && styles.cellSelected,
                i === todayMonth && styles.cellToday,
                year.value === min?.getFullYear() && min.getMonth() > i && styles.cellDisabled,
                year.value === max?.getFullYear() && max.getMonth() < i && styles.cellDisabled,
              ])}>
              {getMonth(i, 'short')}
            </div>
          ))}
        </div>
      )
    }

    const renderYear = () => {
      return 'year'
    }

    return (
      <delay ref={hide} hide={300}>
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
              {goBackText}
            </button>
            <Space />
            <button
              class={() => styles.contentHeaderButton}
              onclick={createEvent(() => {
                year.value = today.getFullYear()
                month.value = today.getMonth()
                day.value = today.getDate()
                selector.value = 'date'
              })}>
              {todayText}
            </button>
          </Flex>
          <div class={() => styles.contentGridWrapper}>
            {currentSelector === 'month' ? renderMonth : renderYear}
          </div>
        </div>
      </delay>
    )
  }

  return (
    <Modal
      width={480}
      {...props}
      class={{
        root: () => styles.root,
        content: () => styles.content,
      }}>
      {children && <slot name='title'>{children}</slot>}
      <slot name='content'>
        {renderContent}
      </slot>
    </Modal>
  )
}
