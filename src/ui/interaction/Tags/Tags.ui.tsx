import { Component } from 'src/app/Component'

import { Tags } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Tags}
    name='Tags'
    description={description}
    examples={examples}
  />
)
