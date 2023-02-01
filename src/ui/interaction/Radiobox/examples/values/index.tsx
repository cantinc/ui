import { example } from 'src/app/Component'
import { Flex, Radiobox, type RadioItem } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const value = new State('1')

const values: RadioItem[] = [
  { value: '1' },
  { value: '2' },
  { value: '3' },
]

export default example({
  id: 'values',
  title: 'values',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Flex, Radiobox, RadioItem } from '@cantinc/ui'

const value = new State('1')

const values: RadioItem[] = [
  { value: '1' },
  { value: '2' },
  { value: '3' },
]

innet(
  <Flex gap={16} vertical>
    <Radiobox
      name='values'
      inline
      wrap
      value={value}
      values={values}
    />
    Selected: {value}
  </Flex>,
  dom,
)`,
  example: (
    <Flex gap={16} vertical>
      <Radiobox
        name='values'
        inline
        wrap
        value={value}
        values={values}
      />
      Selected: {value}
    </Flex>
  ),
})
