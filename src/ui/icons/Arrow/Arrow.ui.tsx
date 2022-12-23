import { Component } from 'src/app/Component'

import { Arrow } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Arrow}
    name='Arrow'
    description={description}
    examples={examples}
  />
)
