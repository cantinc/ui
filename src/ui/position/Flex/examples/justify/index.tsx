import { example } from 'src/app/Component'
import { Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'justify',
  title: 'Justify',
  description,
  example: (
    <Flex wrap gap={16}>
      <Flex flex justify='start' style='border:3px solid black;min-width:200px'>
        <div style='background:red;padding:12px'>justify</div>
        <div style='background:red;padding:12px'>start</div>
      </Flex>
      <Flex flex justify='end' style='border:3px solid black;min-width:200px'>
        <div style='background:red;padding:12px'>justify</div>
        <div style='background:red;padding:12px'>end</div>
      </Flex>
      <Flex flex justify='center' style='border:3px solid black;min-width:200px'>
        <div style='background:red;padding:12px'>justify</div>
        <div style='background:red;padding:12px'>center</div>
      </Flex>
      <Flex flex justify='between' style='border:3px solid black;min-width:200px'>
        <div style='background:red;padding:12px'>justify</div>
        <div style='background:red;padding:12px'>between</div>
      </Flex>
      <Flex flex justify='around' style='border:3px solid black;min-width:200px'>
        <div style='background:red;padding:12px'>justify</div>
        <div style='background:red;padding:12px'>around</div>
      </Flex>
    </Flex>
  ),
})
