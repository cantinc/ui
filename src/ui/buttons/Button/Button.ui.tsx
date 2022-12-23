import { Component } from 'src/app/Component'

import { Button } from './Button'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Button}
    name='Button'
    description={description}
    examples={examples}
  />
)
