import { HTMLStyleProps, Ref, StateProp, style, use, useShow } from '@innet/dom'
import classes from 'html-classes'
import { Cache, createEvent, State } from 'watch-state'

import { actionProp, getMonth } from '../../../utils'
import { Icon } from '../../icons'
import styles from './CalendarTitle.scss'

const useStyle = style(styles)

export interface CalendarTitleProps extends HTMLStyleProps<HTMLDivElement> {
  value?: StateProp<Date>
  onChange?: (date: Date) => void
  rotationTop?: State<boolean>
  onNext?: () => void
  onPrev?: () => void
  onClick?: () => void
  min?: Date
  max?: Date
}

export const minCalendarDate = new Date(0, 0, 0, 0, 0, 0, 0)
export const maxCalendarDate = new Date(10000, 0, 0, 0, 0, 0, 0)

export function CalendarTitle ({
  value = new State(new Date()),
  onChange,
  rotationTop = new State(),
  onNext,
  onPrev,
  onClick,
  min = minCalendarDate,
  max = maxCalendarDate,
  ...props
}: CalendarTitleProps = {}) {
  onChange = actionProp(value, onChange)

  const styles = useStyle()
  const disablePrev = new Cache(() => use(value) <= min)
  const disableNext = new Cache(() => use(value) >= max)

  const handleNext = createEvent(() => {
    rotationTop.value = false
    const date = use(value)
    const month = date.getMonth()

    if (month > 10) {
      onChange?.(new Date(date.getFullYear() + 1, 0))
    } else {
      onChange?.(new Date(date.getFullYear(), month + 1))
    }

    onNext?.()
  })

  const handlePrev = createEvent(() => {
    rotationTop.value = true
    const date = use(value)
    const month = date.getMonth()

    if (month < 1) {
      onChange?.(new Date(date.getFullYear() - 1, 11))
    } else {
      onChange?.(new Date(date.getFullYear(), month - 1))
    }

    onPrev?.()
  })

  return (
    <div {...props} class={() => styles.root}>
      <button
        type='button'
        disabled={disablePrev}
        onclick={handlePrev}
        class={() => styles.arrow}>
        <Icon
          icon='chevronLeft'
        />
      </button>
      <div class={() => styles.content}>
        {() => {
          const show = useShow()
          const hide = new Ref<State<boolean>>()
          const date = use(value)

          return (
            <delay ref={hide} hide={300}>
              <button
                onclick={onClick}
                tabIndex={0}
                class={() => classes([
                  styles.date,
                  rotationTop?.value && styles.rotationTop,
                  show.value && styles.dateShow,
                  hide.value?.value && styles.dateHide,
                ])}>
                {getMonth(date.getMonth())}
                {date.getFullYear()}
              </button>
            </delay>
          )
        }}
      </div>
      <button
        type='button'
        disabled={disableNext}
        onclick={handleNext}
        class={() => styles.arrow}>
        <Icon
          icon='chevronRight'
        />
      </button>
    </div>
  )
}
