import { Component } from 'src/app/Component'

import { Form } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Form}
    name='Form'
    description={description}
    examples={examples}
  />
)
