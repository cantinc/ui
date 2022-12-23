import { Component } from 'src/app/Component'

import { Details } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Details}
    name='Details'
    description={description}
    examples={examples}
  />
)
