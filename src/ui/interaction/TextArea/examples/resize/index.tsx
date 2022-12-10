import { example } from 'src/app/Component'
import { Flex, TextArea } from 'src/ui'

import description from './README.md'

export default example({
  id: 'resize',
  title: 'resize',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Flex, TextArea } from '@cantinc/ui'

innet(
  <Flex vertical>
    <TextArea label='auto' placeholder='Default value' resize='auto' />
    <TextArea resize />
    <TextArea label='vertical' resize='vertical' />
    <TextArea label='horizontal' resize='horizontal' />
    <TextArea label='both' resize='both' />
    <TextArea label='none' resize='none' />
  </Flex>,
  dom,
)`,
  example: (
    <Flex vertical>
      <TextArea label='auto' placeholder='Default value' resize='auto' />
      <TextArea resize />
      <TextArea label='vertical' resize='vertical' />
      <TextArea label='horizontal' resize='horizontal' />
      <TextArea label='both' resize='both' />
      <TextArea label='none' resize='none' />
    </Flex>
  ),
})
