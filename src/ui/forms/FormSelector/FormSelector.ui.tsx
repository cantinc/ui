import { Component } from 'src/app/Component'

import { FormSelector } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={FormSelector}
    name='FormSelector'
    description={description}
    examples={examples}
  />
)
