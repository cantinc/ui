import { useChildren } from '@innet/jsx'

import { Flex, FlexProps } from '../Flex'

export interface FooterProps extends FlexProps {

}

export function Footer (props: FooterProps) {
  const children = useChildren()

  return (
    <Flex element='footer' {...props}>
      {children}
    </Flex>
  )
}
