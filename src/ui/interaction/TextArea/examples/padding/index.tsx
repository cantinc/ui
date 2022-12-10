import { example } from 'src/app/Component'
import { Flex, TextArea } from 'src/ui'

import description from './README.md'

export default example({
  id: 'padding',
  title: 'padding',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Flex, TextArea } from '@cantinc/ui'

innet(
  <Flex gap={[0, 8]} wrap>
    <TextArea
      flex
      padding={[0, 8]}
      placeholder='Placeholder...'
    />
    <TextArea
      flex
      padding={[14, 16, 4]}
      label='Label...'
    />
    <TextArea
      flex
      padding={[16, 8, 8, 16]}
      label='Label...'
    />
  </Flex>,
  dom,
)`,
  example: (
    <Flex gap={[0, 8]} wrap>
      <TextArea
        flex
        padding={[0, 8]}
        placeholder='Placeholder...'
      />
      <TextArea
        flex
        padding={[14, 16, 4]}
        label='Label...'
      />
      <TextArea
        flex
        padding={[16, 8, 8, 16]}
        label='Label...'
      />
    </Flex>
  ),
})
