import { Component } from 'src/app/Component'

import { FormInput } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={FormInput}
    name='FormInput'
    description={description}
    examples={examples}
  />
)
