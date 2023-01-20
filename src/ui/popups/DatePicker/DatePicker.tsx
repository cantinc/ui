import { StateProp, style } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import { State } from 'watch-state'

import { getDaysInMonth } from '../../../utils'
import { Button, Buttons } from '../../buttons'
import { Calendar, CalendarGridCell } from '../../interaction/Calendar'
import { CalendarTitle } from '../../interaction/CalendarTitle'
import { Space } from '../../layout'
import { Modal, ModalProps } from '../Modal'
import styles from './DatePicker.scss'

const useStyle = style(styles)

export type DataPickerSelector = 'date' | 'month' | 'year'

const today = new Date()
const todayYear = today.getFullYear()
const todayMonth = today.getMonth()
const todayDay = today.getDate()

export interface DatePickerProps extends ModalProps {
  selector?: State<DataPickerSelector>
  year?: State<number>
  month?: State<number>
  day?: State<number>
  rotationTop?: State<boolean>
  min?: Date
  max?: Date
  value?: StateProp<string>
  onChange?: (value: string) => void
}

export function DatePicker ({
  selector = new State('date'),
  year = new State(todayYear),
  month = new State(todayMonth),
  day = new State(todayDay),
  rotationTop = new State(true),
  min,
  max,
  ...props
}: DatePickerProps = {}) {
  const children = useChildren()
  const styles = useStyle()

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

  const renderContent = () => {
    const currentSelector = selector.value

    if (currentSelector === 'date') {
      return (
        <Calendar
          cellHeight={57}
          onselect={({ date }) => {
            const newMonth = date.getMonth()

            if (month.value !== newMonth) {
              rotationTop.value = month.value > newMonth
              month.value = date.getMonth()
            }

            day.value = date.getDate()
          }}
          class={{
            cell: () => styles.cell,
          }}
          year={year}
          month={month}
          rotationTop={rotationTop}
          selectedHandler={handleSelect}
          disableHandler={handleDisable}>
          <CalendarTitle
            onNext={() => {
              const currentDate = new Date(year.value, month.value + 1, -1)

              if (max && max < new Date(year.value, month.value, day.value)) {
                day.value = max.getDate()
              } else if (getDaysInMonth(currentDate) < day.value) {
                day.value = getDaysInMonth(currentDate)
              }
            }}
            onPrev={() => {
              if (min && min > new Date(year.value, month.value, day.value)) {
                day.value = min.getDate()
              }
            }}
            min={min}
            max={max}
            rotationTop={rotationTop}
            year={year}
            month={month}
          />
        </Calendar>
      )
    }
  }

  return (
    <Modal
      width={480}
      {...props}
      class={{
        root: () => styles.root,
        header: () => styles.header,
        content: () => styles.content,
      }}>
      {children && <slot name='title'>{children}</slot>}
      <slot name='content'>
        <Space />
        {renderContent}
        <Space gap={24} />
        <Buttons>
          <Button flex>
            Apply
          </Button>
        </Buttons>
      </slot>
    </Modal>
  )
}
