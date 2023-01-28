import { example } from 'src/app/Component'
import { BadgeFooter, Image } from 'src/ui'

import background from './background.jpg'
import description from './README.md'

export default example({
  id: 'image',
  title: 'Image',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { BadgeFooter, Image } from '@cantinc/ui'

innet(
  <Image
    size={100}
    radius={50}
    align='center'
    justify='center'
    src={background}
    inline
    padding={[16, 16, 48]}>
    Content
    <BadgeFooter offset={1}>
      footer
    </BadgeFooter>
  </Image>,
  dom,
)`,
  example: (
    <Image
      size={100}
      radius={50}
      align='center'
      justify='center'
      src={background}
      inline
      padding={[16, 16, 48]}>
      Content
      <BadgeFooter offset={1}>
        footer
      </BadgeFooter>
    </Image>
  ),
})
