import { Component } from 'src/app/Component'

import examples from './examples'
import { Markdown } from './Markdown'
import description from './README.md'

export default () => (
  <Component
    component={Markdown}
    name='Markdown'
    description={description}
    examples={examples}
  />
)
