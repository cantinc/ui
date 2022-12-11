import { use } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import { Flex, FlexProps } from '../Flex'

export interface LayoutProps extends FlexProps {
  width?: number
}

export function Layout ({
  width,
  style = '',
  ...props
}: LayoutProps = {}) {
  const children = useChildren()

  return (
    <Flex
      flex
      align='stretch'
      {...props}
      style={() => `${width ? `--ui-layout-width:${width}px;` : ''}${use(style)}`}>
      {children}
    </Flex>
  )
}
