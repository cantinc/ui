import { Component } from 'src/app/Component'

import { SearchToggleBar } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={SearchToggleBar}
    name='SearchToggleBar'
    description={description}
    examples={examples}
  />
)
