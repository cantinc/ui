import { example } from 'src/app/Component'
import { Selector, SelectorItem } from 'src/ui'

import description from './README.md'

export default example({
  id: 'children',
  title: 'children',
  description,
  components: {
    [SelectorItem.name]: 'SelectorItem',
  },
  example: (
    <Selector search exact>
      <SelectorItem value='' label='None' />
      <SelectorItem value='test1' label='Test 1' />
      <SelectorItem value='test2' label='Test 2' />
      <SelectorItem value='test3' label='Test 3' />
    </Selector>
  ),
})
