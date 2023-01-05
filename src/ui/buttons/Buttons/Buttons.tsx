import { useChildren } from '@innet/jsx'

import { Flex, FlexProps } from '../../layout'

export interface ButtonsProps extends FlexProps {

}

export function Buttons (props: ButtonsProps) {
  const children = useChildren()

  return (
    <Flex wrap gap={24} {...props}>
      {children}
    </Flex>
  )
}
