import { example } from 'src/app/Component'
import { Icon, Input } from 'src/ui'

import description from './README.md'

export default example({
  id: 'beforeAfter',
  title: 'before & after',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Input, Icon } from '@cantinc/ui'

innet(
  <Input
    placeholder='Enter count'
    gap={8}
    before={<Icon icon='loupe' />}
    after={<Icon />}
    inline
  />,
  dom,
)`,
  example: (
    <Input
      placeholder='Enter count'
      gap={8}
      before={<Icon icon='loupe' />}
      after={<Icon />}
      inline
    />
  ),
})
