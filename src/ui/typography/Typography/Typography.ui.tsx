import { Component } from 'src/app/Component'

import { Typography } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Typography}
    name='Typography'
    description={description}
    examples={examples}
  />
)
