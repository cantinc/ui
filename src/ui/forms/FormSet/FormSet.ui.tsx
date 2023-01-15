import { Component } from 'src/app/Component'

import { FormSet } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={FormSet}
    name='FormSet'
    description={description}
    examples={examples}
  />
)
