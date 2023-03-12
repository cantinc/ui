import { example } from 'src/app/Component'
import { Icon, Image } from 'src/ui'

import background from './background3.jpg'
import description from './README.md'

export default example({
  id: 'fallback',
  title: 'fallback',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Image, Icon } from '@cantinc/ui'

import background from './background.jpg'

innet(
  <Image
    justify='center'
    align='center'
    src='test.txt'
    fallback={background}
    radius={70}
    size={140}>
    <Icon
      color='var(--color-100)'
      size={32}>
      13
    </Icon>
  </Image>,
  dom,
)`,
  example: (
    <Image
      justify='center'
      align='center'
      src='test.txt'
      fallback={background}
      radius={70}
      size={140}>
      <Icon
        color='var(--color-100)'
        size={32}>
        13
      </Icon>
    </Image>
  ),
})
