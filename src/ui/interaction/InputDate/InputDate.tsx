import { StateProp, style, use } from '@innet/dom'
import Mask from 'inputmask'
import { State } from 'watch-state'

import { localeDateFormat, localeDateFormatPlaceholder } from '../../../constants/locale'
import { ActionProp, actionProp, createDateFromLocal } from '../../../utils'
import { Icon } from '../../icons'
import { DatePicker, ModalsPortal } from '../../popups'
import { InputMask, InputMaskProps } from '../InputMask'
import styles from './InputDate.scss'

const useStyles = style(styles)

const minDate = new Date(1900, 0, 1)
const maxDate = new Date(2050, 11, 31)

const mask: Mask.Options = {
  alias: 'datetime',
  inputFormat: localeDateFormat,
  placeholder: localeDateFormatPlaceholder,
  inputmode: 'numeric',
  clearMaskOnLostFocus: false,
}

export interface InputDateProps extends Omit<InputMaskProps, 'mask' | 'value' | 'oninput'> {
  apply?: any
  value?: StateProp<Date | undefined>
  min?: Date
  max?: Date
  goBackText?: any
  todayText?: any
  oninput?: ActionProp<Date | undefined>
}
export function InputDate ({
  apply = 'Apply',
  value = new State(),
  oninput,
  min = minDate,
  max = maxDate,
  goBackText,
  todayText,
  ...props
}: InputDateProps) {
  oninput = actionProp(value, oninput)
  const styles = useStyles()
  const showCalendar = new State(false)
  const handleCalendarClick = (e: MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    showCalendar.value = true
  }
  const handleCalendarClose = () => {
    showCalendar.value = false
  }
  const handleApply = (date: Date) => {
    oninput?.(date)
    handleCalendarClose()
  }

  const convertValue = () => {
    const date = use(value)

    return !date || isNaN(date as any) ? '' : date.toLocaleDateString()
  }
  const handleInput = (val: string) => {
    if (!val) {
      oninput?.(undefined)
      return
    }

    const curDate = createDateFromLocal(val)

    if (isNaN(curDate as any)) return
    oninput?.(curDate)
  }

  return (
    <>
      <InputMask
        value={convertValue}
        oninput={handleInput}
        mask={{
          ...mask,
          min: min.toLocaleDateString(),
          max: max.toLocaleDateString(),
        }}
        {...props}>
        <slot name='after'>
          <Icon
            icon='calendar'
            class={() => styles.icon}
            onclick={handleCalendarClick}
          />
        </slot>
      </InputMask>
      <show state={showCalendar}>
        <ModalsPortal>
          <DatePicker
            min={min}
            max={max}
            goBackText={goBackText}
            todayText={todayText}
            defaultValue={value}
            apply={apply}
            onApply={handleApply}
            onclose={handleCalendarClose}>
            {props.label}
          </DatePicker>
        </ModalsPortal>
      </show>
    </>
  )
}