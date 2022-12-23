import { Component } from 'src/app/Component'

import { ToggleBar } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={ToggleBar}
    name='ToggleBar'
    description={description}
    examples={examples}
  />
)
