import { Component } from 'src/app/Component'

import { Progress } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Progress}
    name='Progress'
    description={description}
    examples={examples}
  />
)
