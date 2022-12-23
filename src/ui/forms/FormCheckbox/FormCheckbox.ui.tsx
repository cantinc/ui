import { Component } from 'src/app/Component'

import { FormCheckbox } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={FormCheckbox}
    name='FormCheckbox'
    description={description}
    examples={examples}
  />
)
