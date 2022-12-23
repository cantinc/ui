import { Component } from 'src/app/Component'

import { Spin } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Spin}
    name='Spin'
    description={description}
    examples={examples}
  />
)
