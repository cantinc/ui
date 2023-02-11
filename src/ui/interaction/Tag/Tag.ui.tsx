import { Component } from 'src/app/Component'

import { Tag } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Tag}
    name='Tag'
    description={description}
    examples={examples}
  />
)
