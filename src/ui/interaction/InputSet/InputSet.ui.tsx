import { Component } from 'src/app/Component'

import { InputSet } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={InputSet}
    name='InputSet'
    description={description}
    examples={examples}
  />
)
