import { Component } from 'src/app/Component'

import { FormInputMask } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={FormInputMask}
    name='FormInput'
    description={description}
    examples={examples}
  />
)
