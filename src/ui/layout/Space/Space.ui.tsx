import { Component } from 'src/app/Component'

import { Space } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Space}
    name='Space'
    description={description}
    examples={examples}
  />
)
