import { HTMLStyleProps, Ref, style, useShow } from '@innet/dom'
import classes from 'html-classes'
import { createEvent, State } from 'watch-state'

import { getMonth } from '../../../utils'
import { Icon } from '../../icons'
import styles from './CalendarTitle.scss'

const useStyle = style(styles)

export interface CalendarTitleProps extends HTMLStyleProps<HTMLDivElement> {
  year?: State<number>
  month?: State<number>
  rotationTop?: State<boolean>
  onNext?: () => void
  onPrev?: () => void
  onClick?: () => void
}

export function CalendarTitle ({
  year = new State(new Date().getFullYear()),
  month = new State(new Date().getMonth()),
  rotationTop = new State(),
  onNext,
  onPrev,
  onClick,
  ...props
}: CalendarTitleProps = {}) {
  const styles = useStyle()

  const handleNext = createEvent(() => {
    rotationTop.value = false

    if (month.value > 10) {
      month.value = 0
      year.value++
    } else {
      month.value++
    }

    onNext?.()
  })

  const handlePrev = createEvent(() => {
    rotationTop.value = true

    if (month.value < 1) {
      month.value = 11
      year.value--
    } else {
      month.value--
    }

    onPrev?.()
  })

  return (
    <div {...props} class={() => styles.root}>
      <button
        type='button'
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
                {getMonth(month.value)}
                {year?.value}
              </button>
            </delay>
          )
        }}
      </div>
      <button
        type='button'
        onclick={handleNext}
        class={() => styles.arrow}>
        <Icon
          icon='chevronRight'
        />
      </button>
    </div>
  )
}
