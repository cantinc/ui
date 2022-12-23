import { Component } from 'src/app/Component'

import { Layout } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Layout}
    name='Layout'
    description={description}
    examples={examples}
  />
)
