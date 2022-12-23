import { Component } from 'src/app/Component'

import { FormTextArea } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={FormTextArea}
    name='FormTextArea'
    description={description}
    examples={examples}
  />
)
