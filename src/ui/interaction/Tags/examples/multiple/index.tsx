import { example } from 'src/app/Component'
import { Flex, type ITags, Tags } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const state = new State([])

const tags: ITags = [
  { value: '', label: 'Other' },
  { value: 'eat', label: 'Eat' },
  { value: 'drink', label: 'Drink' },
  { value: 'sweet', label: 'Sweet' },
]

export default example({
  id: 'multiple',
  title: 'multiple',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'
import { State } from 'watch-state'

import { Flex, Tags, ITags } from '@cantinc/ui'

const state = new State('')

const tags: ITags = [
  { value: '', label: 'Other' },
  { value: 'eat', label: 'Eat' },
  { value: 'drink', label: 'Drink' },
  { value: 'sweet', label: 'Sweet' },
]

innet(
  <Flex gap={8} vertical>
    <Tags
      multiple
      values={tags}
      value={state}
    />
    Value: {() => JSON.stringify(state.value)}
  </Flex>,
  dom,
)`,
  example: (
    <Flex gap={8} vertical>
      <Tags
        multiple
        values={tags}
        value={state}
      />
      Value: {() => JSON.stringify(state.value)}
    </Flex>
  ),
})
