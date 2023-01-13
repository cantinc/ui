import { Component } from 'src/app/Component'

import { Set } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Set}
    name='Set'
    description={description}
    examples={examples}
  />
)
