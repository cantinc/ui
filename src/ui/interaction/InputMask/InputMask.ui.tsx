import { Component } from 'src/app/Component'

import { InputMask } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={InputMask}
    name='InputMask'
    description={description}
    examples={examples}
  />
)
