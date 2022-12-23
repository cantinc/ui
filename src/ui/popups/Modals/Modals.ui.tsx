import { Component } from 'src/app/Component'

import { Modals } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Modals}
    name='Modals'
    description={description}
    examples={examples}
  />
)
