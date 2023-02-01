import { useChildren } from '@innet/jsx'

import { Flex, type FlexProps } from '../Flex'

export interface MainProps extends FlexProps {

}

export function Main (props: MainProps) {
  const children = useChildren()

  return (
    <Flex flex element='main' {...props}>
      {children}
    </Flex>
  )
}
