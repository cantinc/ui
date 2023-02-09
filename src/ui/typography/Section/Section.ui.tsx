import { Component } from 'src/app/Component'

import { Section } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Section}
    name='Section'
    description={description}
    examples={examples}
  />
)
