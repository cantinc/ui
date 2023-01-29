import { Component } from 'src/app/Component'

import { InputNumber } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={InputNumber}
    name='InputNumber'
    description={description}
    examples={examples}
  />
)
