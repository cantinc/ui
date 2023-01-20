import { Component } from 'src/app/Component'

import { DatePicker } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={DatePicker}
    name='DatePicker'
    description={description}
    examples={examples}
  />
)
