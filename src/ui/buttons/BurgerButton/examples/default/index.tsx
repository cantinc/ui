import { example } from 'src/app/Component'
import { BurgerButton, Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { BurgerButton, Flex } from '@cantinc/ui'

innet(
  <Flex gap={16}>
    <BurgerButton size={27} />
    <BurgerButton size={24} />
    <BurgerButton size={21} />
    <BurgerButton />
    <BurgerButton size={15} />
    <BurgerButton size={12} />
    <BurgerButton size={9} />
    <BurgerButton size={6} />
  </Flex>,
  dom,
)`,
  example: (
    <Flex gap={16}>
      <BurgerButton size={27} />
      <BurgerButton size={24} />
      <BurgerButton size={21} />
      <BurgerButton />
      <BurgerButton size={15} />
      <BurgerButton size={12} />
      <BurgerButton size={9} />
      <BurgerButton size={6} />
    </Flex>
  ),
})
