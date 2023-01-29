import { Component } from 'src/app/Component'

import { SearchInputNumber } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={SearchInputNumber}
    name='SearchInputNumber'
    description={description}
    examples={examples}
  />
)
