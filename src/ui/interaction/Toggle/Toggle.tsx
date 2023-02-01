import { style } from '@innet/dom'

import { Check, type CheckProps } from '../../prototypes'
import styles from './Toggle.scss'

const useStyle = style({ root: '', ...styles })

export interface ToggleProps extends CheckProps {

}

export function Toggle (props: ToggleProps) {
  const styles = useStyle()

  return <Check type='checkbox' {...props} class={styles} />
}
