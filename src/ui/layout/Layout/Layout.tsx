import { style, use } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import { Flex, FlexProps } from '../Flex'
import styles from './Layout.scss'

const useStyles = style(styles)

export interface LayoutProps extends FlexProps {
  width?: number
}

export function Layout ({
  width,
  style = '',
  ...props
}: LayoutProps = {}) {
  const children = useChildren()
  const styles = useStyles()

  return (
    <Flex
      flex
      align='stretch'
      {...props}
      class={() => styles.root}
      style={() => `${width ? `--ui-layout-width:${width}px;` : ''}${use(style)}`}>
      {children}
    </Flex>
  )
}
