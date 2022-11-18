import { example } from 'src/app/Component'
import { Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'verticalAlign',
  title: 'Vertical align',
  description,
  example: (
    <Flex wrap gap={16} style='background:red'>
      <Flex vertical align='center'>
        <div style='background:yellow;padding:24px'>align</div>
        <div style='background:green;padding:6px'>center</div>
      </Flex>
      <Flex vertical align='start'>
        <div style='background:yellow;padding:24px'>align</div>
        <div style='background:green;padding:6px'>start</div>
      </Flex>
      <Flex vertical align='end'>
        <div style='background:yellow;padding:24px'>align</div>
        <div style='background:green;padding:6px'>end</div>
      </Flex>
      <Flex vertical align='stretch'>
        <div style='background:yellow;padding:24px'>align</div>
        <div style='background:green;padding:6px'>stretch</div>
      </Flex>
    </Flex>
  ),
})
