import { Component } from 'src/app/Component'

import { Input } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Input}
    name='Input'
    description={description}
    examples={examples}
  />
)
