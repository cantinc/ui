import { Component } from 'src/app/Component'

import { AsyncSpin } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={AsyncSpin}
    name='AsyncSpin'
    description={description}
    examples={examples}
  />
)
