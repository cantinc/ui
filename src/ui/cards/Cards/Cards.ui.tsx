import { Component } from 'src/app/Component'

import { Cards } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Cards}
    name='Cards'
    description={description}
    examples={examples}
  />
)
