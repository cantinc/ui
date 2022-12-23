import { Component } from 'src/app/Component'

import { Divider } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Divider}
    name='Divider'
    description={description}
    examples={examples}
  />
)
