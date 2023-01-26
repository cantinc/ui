import { Component } from 'src/app/Component'

import { FormInputDate } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={FormInputDate}
    name='FormInput'
    description={description}
    examples={examples}
  />
)
