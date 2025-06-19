import { strip } from '@cantinc/utils'
import { inject, Ref, type StateProp, style, use } from '@innet/dom'
import { type Merge } from 'src/types'
import { State } from 'watch-state'

import { actionProp } from '../../../utils'
import { Icon } from '../../icons'
import { Divider } from '../../typography'
import { Input, type InputProps } from '../Input'
import styles from './InputNumber.scss'

const useStyles = style(styles)

export interface InputNumberProps extends Merge<InputProps, {
  value?: StateProp<number>
  step?: StateProp<number>
  oninput?: (value: number) => void
  min?: StateProp<number>
  max?: StateProp<number>
}> {}

export function InputNumber ({
  value = new State(0),
  step = 1,
  oninput,
  min,
  max,
  inputRef = new Ref(),
  onkeydown,
  hint,
  ...props
}: InputNumberProps = {}) {
  const styles = useStyles()

  oninput = actionProp(value, oninput)

  const increase = () => {
    const newValue = strip(use(value) + use(step))
    const currentMin = use(min)
    const currentMax = use(max)

    if (currentMin !== undefined && newValue < currentMin) {
      return oninput?.(currentMin)
    }

    if (currentMax !== undefined && newValue > currentMax) {
      return oninput?.(currentMax)
    }

    oninput?.(newValue)
  }
  const decrease = () => {
    const newValue = strip(use(value) - use(step))
    const currentMin = use(min)
    const currentMax = use(max)

    if (currentMin !== undefined && newValue < currentMin) {
      return oninput?.(currentMin)
    }

    if (currentMax !== undefined && newValue > currentMax) {
      return oninput?.(currentMax)
    }

    oninput?.(newValue)
  }

  let lastKey = ''

  return (
    <Input
      inputRef={inputRef}
      type='number'
      value={() => String(use(value))}
      props={{
        ...props.props,
        input: {
          step: inject(step, String),
          min: inject(min, String),
          max: inject(max, String),
          ...props.props?.input,
        },
      }}
      {...props}
      oninput={val => {
        const newValue = Number(val)
        const oldValue = use(value)

        if (oldValue !== newValue) {
          oninput?.(newValue)
        } else if (!newValue && inputRef.value && lastKey === 'Backspace') {
          inputRef.value.value = '0'
        }
      }}
      onkeydown={(e: KeyboardEvent) => {
        lastKey = e.key
        ;(onkeydown as any)?.(e)
      }}
      class={styles}>
      <slot name='after'>
        <Icon
          icon='minus'
          onclick={decrease}
          class={() => styles.minus}
        />
        <Divider vertical />
        <Icon
          icon='plus'
          onclick={increase}
          class={() => styles.minus}
        />
      </slot>
      {hint && <slot>{hint}</slot>}
    </Input>
  )
}
