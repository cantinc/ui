import { example } from 'src/app/Component'
import { Arrow, type ArrowDirection, Flex, Radiobox, type RadioItem } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const values: RadioItem[] = [
  { value: 'top', label: 'top' },
  { value: 'down', label: 'down' },
  { value: 'right', label: 'right' },
  { value: 'left', label: 'left' },
]
const direction = new State<ArrowDirection>('top')

export default example({
  id: 'direction',
  title: 'direction',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'
import { State } from 'watch-state'

import { Arrow, ArrowDirection, Flex, Radiobox, RadioItem } from '@cantinc/ui'

const values: RadioItem[] = [
  { value: 'top', label: 'top' },
  { value: 'down', label: 'down' },
  { value: 'left', label: 'left' },
  { value: 'right', label: 'right' },
]
const direction = new State<ArrowDirection>('top')

innet(
  <Flex wrap gap={16}>
    <Arrow direction={direction} />
    <Radiobox
      value={direction}
      values={values}
    />
  </Flex>,
  dom,
)`,
  example: (
    <Flex wrap gap={16}>
      <Arrow direction={direction} />
      <Radiobox
        flex
        wrap
        value={direction}
        values={values}
      />
    </Flex>
  ),
})
