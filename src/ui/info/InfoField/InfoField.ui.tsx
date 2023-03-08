import { Component } from 'src/app/Component'

import { InfoField } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={InfoField}
    name='InfoField'
    description={description}
    examples={examples}
  />
)
