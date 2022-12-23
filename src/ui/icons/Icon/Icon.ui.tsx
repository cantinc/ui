import { Component } from 'src/app/Component'

import { Icon } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Icon}
    name='Icon'
    description={description}
    examples={examples}
  />
)
