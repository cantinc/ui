import { Component } from 'src/app/Component'

import { FormHidden } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={FormHidden}
    name='FormInput'
    description={description}
    examples={examples}
  />
)
