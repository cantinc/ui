import { example } from 'src/app/Component'
import { Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'justify',
  title: 'Justify',
  description,
  example: (
    <Flex wrap gap={16}>
      <Flex flex justify='start' style='background:var(--color-80);min-width:200px'>
        <div style='background:var(--color-40);padding:12px'>justify</div>
        <div style='background:var(--color-60);padding:12px'>start</div>
      </Flex>
      <Flex flex justify='end' style='background:var(--color-80);min-width:200px'>
        <div style='background:var(--color-40);padding:12px'>justify</div>
        <div style='background:var(--color-60);padding:12px'>end</div>
      </Flex>
      <Flex flex justify='center' style='background:var(--color-80);min-width:200px'>
        <div style='background:var(--color-40);padding:12px'>justify</div>
        <div style='background:var(--color-60);padding:12px'>center</div>
      </Flex>
      <Flex flex justify='between' style='background:var(--color-80);min-width:200px'>
        <div style='background:var(--color-40);padding:12px'>justify</div>
        <div style='background:var(--color-60);padding:12px'>between</div>
      </Flex>
      <Flex flex justify='around' style='background:var(--color-80);min-width:200px'>
        <div style='background:var(--color-40);padding:12px'>justify</div>
        <div style='background:var(--color-60);padding:12px'>around</div>
      </Flex>
    </Flex>
  ),
})
