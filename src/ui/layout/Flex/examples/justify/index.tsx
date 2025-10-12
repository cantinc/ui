import { example } from 'src/app/Component'
import { Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'justify',
  title: 'Justifying Child Elements',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Flex } from '@cantinc/ui'

innet(
  <Flex wrap gap={16}>
    <Flex flex justify='flex-start' style={{ background: 'var(--color-80)', 'min-width': '200px' }}>
      <div style={{ background: 'var(--color-40)', padding: '12px' }}>justify</div>
      <div style={{ background: 'var(--color-60)', padding: '12px' }}>flex-start</div>
    </Flex>
    <Flex flex justify='flex-end' style={{ background: 'var(--color-80)', 'min-width': '200px' }}>
      <div style={{ background: 'var(--color-40)', padding: '12px' }}>justify</div>
      <div style={{ background: 'var(--color-60)', padding: '12px' }}>flex-end</div>
    </Flex>
    <Flex flex justify='center' style={{ background: 'var(--color-80)', 'min-width': '200px' }}>
      <div style={{ background: 'var(--color-40)', padding: '12px' }}>justify</div>
      <div style={{ background: 'var(--color-60)', padding: '12px' }}>center</div>
    </Flex>
    <Flex flex justify='space-between' style={{ background: 'var(--color-80)', 'min-width': '200px' }}>
      <div style={{ background: 'var(--color-40)', padding: '12px' }}>justify</div>
      <div style={{ background: 'var(--color-60)', padding: '12px' }}>space-between</div>
    </Flex>
    <Flex flex justify='space-around' style={{ background: 'var(--color-80)', 'min-width': '200px' }}>
      <div style={{ background: 'var(--color-40)', padding: '12px' }}>justify</div>
      <div style={{ background: 'var(--color-60)', padding: '12px' }}>space-around</div>
    </Flex>
  </Flex>,
  dom,
)`,
  example: (
    <Flex wrap gap={16}>
      <Flex flex justify='flex-start' style={{ background: 'var(--color-80)', 'min-width': '200px' }}>
        <div style={{ background: 'var(--color-40)', padding: '12px' }}>justify</div>
        <div style={{ background: 'var(--color-60)', padding: '12px' }}>flex-start</div>
      </Flex>
      <Flex flex justify='flex-end' style={{ background: 'var(--color-80)', 'min-width': '200px' }}>
        <div style={{ background: 'var(--color-40)', padding: '12px' }}>justify</div>
        <div style={{ background: 'var(--color-60)', padding: '12px' }}>flex-end</div>
      </Flex>
      <Flex flex justify='center' style={{ background: 'var(--color-80)', 'min-width': '200px' }}>
        <div style={{ background: 'var(--color-40)', padding: '12px' }}>justify</div>
        <div style={{ background: 'var(--color-60)', padding: '12px' }}>center</div>
      </Flex>
      <Flex flex justify='space-between' style={{ background: 'var(--color-80)', 'min-width': '200px' }}>
        <div style={{ background: 'var(--color-40)', padding: '12px' }}>justify</div>
        <div style={{ background: 'var(--color-60)', padding: '12px' }}>space-between</div>
      </Flex>
      <Flex flex justify='space-around' style={{ background: 'var(--color-80)', 'min-width': '200px' }}>
        <div style={{ background: 'var(--color-40)', padding: '12px' }}>justify</div>
        <div style={{ background: 'var(--color-60)', padding: '12px' }}>space-around</div>
      </Flex>
    </Flex>
  ),
})
