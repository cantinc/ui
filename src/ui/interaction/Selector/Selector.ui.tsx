import { Component } from 'src/app/Component'

import { Selector } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Selector}
    name='Selector'
    description={description}
    examples={examples}
  />
)
