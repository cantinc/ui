import { inject, StateProp, style } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import { Flex, FlexProps } from '../Flex'
import styles from './Content.scss'

const useStyles = style(styles)

export interface ContentProps extends FlexProps {
  width?: StateProp<number>
}

export function Content ({
  width,
  style,
  ...props
}: ContentProps = {}) {
  const children = useChildren()
  const styles = useStyles()

  return (
    <Flex
      align='stretch'
      {...props}
      style={{
        ...style,
        '--ui-content-width': inject(width, width => width ? `${width}px` : ''),
      }}
      class={() => styles.root}>
      {children}
    </Flex>
  )
}
