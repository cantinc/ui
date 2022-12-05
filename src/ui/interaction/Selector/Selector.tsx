import { style } from '@innet/dom'

import { Input, InputProps } from '../Input'
import styles from './Selector.scss'

const useStyle = style(styles)

export interface SelectorProps extends InputProps {

}

export function Selector (props: SelectorProps) {
  const styles = useStyle()

  return (
    <Input
      {...props}
      class={styles}
    />
  )
}
