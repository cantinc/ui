import { Component } from 'src/app/Component'

import { SearchToggle } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={SearchToggle}
    name='SearchToggle'
    description={description}
    examples={examples}
  />
)
