import { style, use } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import { Flex, FlexProps } from '../Flex'
import styles from './Aside.scss'

const useStyles = style(styles)

export interface AsideProps extends FlexProps {
  width?: number
}

export function Aside ({
  style = '',
  width = 320,
  ...props
}: AsideProps = {}) {
  const children = useChildren()
  const styles = useStyles()

  return (
    <Flex
      element='aside'
      {...props}
      style={() => `--ui-aside-width:${width}px;${use(style)}`}
      class={() => styles.root}>
      {children}
    </Flex>
  )
}
