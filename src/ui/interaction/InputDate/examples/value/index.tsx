import { inject } from '@innet/dom'
import { example } from 'src/app/Component'
import { Flex, InputDate } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const value = new State<Date>()

export default example({
  id: 'value',
  title: 'value',
  description,
  code: `import innet from 'innet'
import dom, { inject } from '@innet/dom'
import { State } from 'watch-state'

import { Flex, InputDate } from '@cantinc/ui'

const value = new State<Date>()

innet(
  <Flex vertical>
    <InputDate value={value} />
    {inject(value, String)}
  </Flex>,
  dom,
)`,
  example: (
    <Flex vertical>
      <InputDate value={value} />
      {inject(value, String)}
    </Flex>
  ),
})
