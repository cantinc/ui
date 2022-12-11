import { useChildren } from '@innet/jsx'

import { Flex, FlexProps } from '../Flex'

export interface HeaderProps extends FlexProps<HTMLHeadingElement> {

}

export function Header (props: HeaderProps) {
  const children = useChildren()

  return (
    <Flex element='header' {...props}>
      {children}
    </Flex>
  )
}
