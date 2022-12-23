import { Component } from 'src/app/Component'

import { Drawers } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Drawers}
    name='Drawers'
    description={description}
    examples={examples}
  />
)
