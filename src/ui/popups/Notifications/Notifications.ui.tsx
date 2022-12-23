import { Component } from 'src/app/Component'

import { Notifications } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Notifications}
    name='Notifications'
    description={description}
    examples={examples}
  />
)
