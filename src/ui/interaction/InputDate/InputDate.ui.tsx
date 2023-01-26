import { Component } from 'src/app/Component'

import { InputDate } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={InputDate}
    name='InputDate'
    description={description}
    examples={examples}
  />
)
