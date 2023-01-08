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
  <Flex wrap gap={16}>
    <BurgerButton size={32} />
    <BurgerButton size={24} />
    <BurgerButton size={18} />
    <BurgerButton />
    <BurgerButton size={12} />
    <BurgerButton size={10} />
    <BurgerButton size={8} />
  </Flex>,
  dom,
)`,
  example: (
    <Flex wrap gap={16}>
      <BurgerButton size={32} />
      <BurgerButton size={24} />
      <BurgerButton size={18} />
      <BurgerButton />
      <BurgerButton size={12} />
      <BurgerButton size={10} />
      <BurgerButton size={8} />
      <BurgerButton size={4} />
    </Flex>
  ),
})
