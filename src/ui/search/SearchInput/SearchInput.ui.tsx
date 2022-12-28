import { Component } from 'src/app/Component'

import { SearchInput } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={SearchInput}
    name='SearchInput'
    description={description}
    examples={examples}
  />
)
