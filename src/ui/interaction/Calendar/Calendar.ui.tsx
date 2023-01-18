import { Component } from 'src/app/Component'

import { Calendar } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Calendar}
    name='Calendar'
    description={description}
    examples={examples}
  />
)
