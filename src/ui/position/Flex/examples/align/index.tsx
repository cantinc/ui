import { example } from 'src/app/Component'
import { Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'align',
  title: 'Align',
  description,
  example: (
    <Flex wrap gap={16} style='background:red'>
      <Flex align='center'>
        <div style='background:yellow;padding:12px'>align</div>
        <div style='background:green;padding:6px'>center</div>
      </Flex>
      <Flex align='start'>
        <div style='background:yellow;padding:12px'>align</div>
        <div style='background:green;padding:6px'>start</div>
      </Flex>
      <Flex align='end'>
        <div style='background:yellow;padding:12px'>align</div>
        <div style='background:green;padding:6px'>end</div>
      </Flex>
      <Flex align='stretch'>
        <div style='background:yellow;padding:12px'>align</div>
        <div style='background:green;padding:6px'>stretch</div>
      </Flex>
    </Flex>
  ),
})
