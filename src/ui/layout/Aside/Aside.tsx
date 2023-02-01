import { inject, style } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import { Flex, type FlexProps } from '../Flex'
import styles from './Aside.scss'

const useStyles = style(styles)

export interface AsideProps extends FlexProps {
  width?: number
}

export function Aside ({
  style,
  width = 320,
  ...props
}: AsideProps = {}) {
  const children = useChildren()
  const styles = useStyles()

  return (
    <Flex
      element='aside'
      align='stretch'
      {...props}
      style={{
        ...style,
        '--ui-aside-width': inject(width, width => width ? `${width}px` : ''),
      }}
      class={() => styles.root}>
      {children}
    </Flex>
  )
}
