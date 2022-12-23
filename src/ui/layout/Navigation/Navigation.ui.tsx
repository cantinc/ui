import { Component } from 'src/app/Component'

import { Navigation } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Navigation}
    name='Navigation'
    description={description}
    examples={examples}
  />
)
