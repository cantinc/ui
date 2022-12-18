import { Flex, Navigation, Space } from 'src/ui'

import { navigation } from '../../constants'

export function LayoutMenu () {
  return (
    <Navigation menu={navigation}>
      <Space />
      <Flex justify='center'>
        v{process.env.CANTINC_UI_VERSION}
      </Flex>
    </Navigation>
  )
}
