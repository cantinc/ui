import { Component } from 'src/app/Component'

import { Popout } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Popout}
    name='Popout'
    description={description}
    examples={examples}
  />
)
