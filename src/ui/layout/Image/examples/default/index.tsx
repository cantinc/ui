import { example } from 'src/app/Component'
import { Icon, Image } from 'src/ui'

import background from './background2.jpg'
import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Image, Icon } from '@cantinc/ui'

import background from './background.jpg'

innet(
  <Image
    justify='center'
    align='center'
    src={background}
    radius={70}
    style={{ color: 'var(--color-100)', 'font-size': '36px' }}
    size={140}>
    <Icon
      size={28}
      color='var(--color-100)'
      icon='cant'
    />
    13
  </Image>,
  dom,
)`,
  example: (
    <Image
      justify='center'
      align='center'
      src={background}
      radius={70}
      style={{ color: 'var(--color-100)', 'font-size': '36px' }}
      size={140}>
      <Icon
        size={28}
        color='var(--color-100)'
        icon='cant'
      />
      13
    </Image>
  ),
})
