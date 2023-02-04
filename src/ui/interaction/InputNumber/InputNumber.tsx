import { strip } from '@cantinc/utils'
import { inject, type StateProp, style, use } from '@innet/dom'
import { useSlots } from '@innet/jsx'
import { State } from 'watch-state'

import { actionProp } from '../../../utils'
import { Icon } from '../../icons'
import { Space } from '../../layout'
import { Divider } from '../../typography'
import { Input, type InputProps } from '../Input'
import styles from './InputNumber.scss'

const useStyles = style(styles)

export interface InputNumberProps extends Omit<InputProps, 'value' | 'oninput'> {
  value?: StateProp<number>
  step?: StateProp<number>
  oninput?: (value: number) => void
}

export function InputNumber ({
  value = new State(0),
  step = 1,
  oninput,
  ...props
}: InputNumberProps = {}) {
  const { hint } = useSlots()
  const styles = useStyles()

  oninput = actionProp(value, oninput)

  const increase = () => {
    oninput?.(strip(use(value) + use(step)))
  }
  const decrease = () => {
    oninput?.(use(value) - use(step))
  }

  return (
    <Input
      type='number'
      value={() => String(use(value))}
      oninput={value => oninput?.(Number(value))}
      props={{
        ...props.props,
        input: {
          step: inject(step, String),
          ...props.props?.input,
        },
      }}
      {...props}
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
