import { Component } from 'src/app/Component'

import { Checkbox } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Checkbox}
    name='Checkbox'
    description={description}
    examples={examples}
  />
)
