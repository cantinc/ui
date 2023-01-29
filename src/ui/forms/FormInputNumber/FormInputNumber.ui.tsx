import { Component } from 'src/app/Component'

import { FormInputNumber } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={FormInputNumber}
    name='FormInputNumber'
    description={description}
    examples={examples}
  />
)
