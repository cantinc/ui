import { Component } from 'src/app/Component'

import { SpinBox } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={SpinBox}
    name='SpinBox'
    description={description}
    examples={examples}
  />
)
