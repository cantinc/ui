import { example } from 'src/app/Component'
import { Selector, SelectorItemProps } from 'src/ui'

import description from './README.md'

const data: SelectorItemProps[] = [
  { value: '7701889831' },
  { value: '4028004764' },
  { value: '6732213992' },
]

export default example({
  id: 'arrow',
  title: 'arrow',
  description,
  example: (
    <Selector arrow values={data} />
  ),
})
