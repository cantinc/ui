import { Component } from 'src/app/Component'

import { Toggle } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Toggle}
    name='Toggle'
    description={description}
    examples={examples}
  />
)
