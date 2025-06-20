import { example } from 'src/app/Component'
import { Icon, TextArea } from 'src/ui'

import description from './README.md'

export default example({
  id: 'beforeAfter',
  title: 'before & after',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { TextArea, Icon } from '@cantinc/ui'

innet(
  <TextArea
    placeholder='Enter count'
    gap={8}
    before={<Icon />}
    after={<Icon />}
    inline
  />,
  dom,
)`,
  example: (
    <TextArea
      placeholder='Enter count'
      gap={8}
      before={<Icon />}
      after={<Icon />}
      inline
    />
  ),
})
