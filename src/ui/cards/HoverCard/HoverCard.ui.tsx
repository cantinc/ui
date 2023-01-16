import { Component } from 'src/app/Component'

import { HoverCard } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={HoverCard}
    name='HoverCard'
    description={description}
    examples={examples}
  />
)
