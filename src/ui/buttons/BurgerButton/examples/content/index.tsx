import { example } from 'src/app/Component'
import { BurgerButton, Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'content',
  title: 'Content',
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
    <Flex vertical gap={24}>
      <BurgerButton size={27}>
        Size: 27
      </BurgerButton>
      <BurgerButton size={24}>
        Size: 24
      </BurgerButton>
      <BurgerButton size={21}>
        Size: 21
      </BurgerButton>
      <BurgerButton>
        Size: 18 (default)
      </BurgerButton>
      <BurgerButton size={15}>
        Size: 15
      </BurgerButton>
      <BurgerButton size={12}>
        Size: 12
      </BurgerButton>
      <BurgerButton size={9}>
        Size: 9
      </BurgerButton>
      <BurgerButton size={6}>
        Size: 6
      </BurgerButton>
    </Flex>
  ),
})
