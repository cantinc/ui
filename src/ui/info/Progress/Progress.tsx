import { inject, type StateProp, style } from '@innet/dom'

import { Flex, type FlexProps } from '../../layout'
import styles from './Progress.scss'

const useStyle = style(styles)

export interface ProgressProps extends FlexProps {
  value: StateProp<number>
}

export function Progress ({
  style,
  value,
  ...props
}: ProgressProps) {
  const styles = useStyle()

  return (
    <Flex
      padding={8}
      {...props}
      style={{
        ...style,
        '--ui-progress': inject(value, String),
      }}
      class={() => styles.root}
    />
  )
}
