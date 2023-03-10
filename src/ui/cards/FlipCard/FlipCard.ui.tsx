import { Component } from 'src/app/Component'

import { FlipCard } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={FlipCard}
    name='FlipCard'
    description={description}
    examples={examples}
  />
)
