import { Component } from 'src/app/Component'

import { Dots } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Dots}
    name='Dots'
    description={description}
    examples={examples}
  />
)
