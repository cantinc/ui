import { style } from '@innet/dom'

import { Check, CheckProps } from '../../prototypes'
import styles from './Checkbox.scss'

const useStyle = style({ root: '', ...styles })

export interface CheckboxProps extends CheckProps {

}

export function Checkbox (props: CheckboxProps) {
  const styles = useStyle()
  return <Check type='checkbox' {...props} class={styles} />
}
