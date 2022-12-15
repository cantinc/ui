import { example } from 'src/app/Component'
import { Flex, Input } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const label = new State('test')

export default example({
  id: 'clearable',
  title: 'clearable',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'
import { State } from 'watch-state'

import { Input, Flex } from '@cantinc/ui'

const label = new State('test')

innet(
  <Flex wrap gap={16}>
    <Input flex clearable value={label} />
    <Input flex label={label} clearable />
  </Flex>,
  dom,
)`,
  example: (
    <Flex wrap gap={16}>
      <Input flex clearable value={label} />
      <Input flex label={label} clearable />
    </Flex>
  ),
})
