import { example } from 'src/app/Component'
import { Divider, Selector, SelectorItem } from 'src/ui'

import description from './README.md'

export default example({
  id: 'children',
  title: 'children',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Selector, SelectorItem } from '@cantinc/ui'

innet(
  <Selector search placement='top' label='Label' exact>
    <SelectorItem value='' label='None' />
    <Divider>Group 1</Divider>
    <SelectorItem value='test1' label='Test 1' />
    <SelectorItem value='test2' label='Test 2' />
    <Divider>Group 2</Divider>
    <SelectorItem value='test21' label='Test 1' />
    <SelectorItem value='test22' label='Test 2' />
  </Selector>,
  dom,
)`,
  example: (
    <Selector search placement='top' label='Label' exact>
      <SelectorItem value='' label='None' />
      <Divider>Group 1</Divider>
      <SelectorItem value='test1' label='Test 1' />
      <SelectorItem value='test2' label='Test 2' />
      <Divider>Group 2</Divider>
      <SelectorItem value='test21' label='Test 1' />
      <SelectorItem value='test22' label='Test 2' />
    </Selector>
  ),
})
