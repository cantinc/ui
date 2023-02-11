import { Component } from 'src/app/Component'

import { SearchTags } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={SearchTags}
    name='SearchTags'
    description={description}
    examples={examples}
  />
)
