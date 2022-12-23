import { Component } from 'src/app/Component'

import { Pages } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Pages}
    name='Pages'
    description={description}
    examples={examples}
  />
)
