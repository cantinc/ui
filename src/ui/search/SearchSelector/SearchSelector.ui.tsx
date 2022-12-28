import { Component } from 'src/app/Component'

import { SearchSelector } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={SearchSelector}
    name='SearchSelector'
    description={description}
    examples={examples}
  />
)
