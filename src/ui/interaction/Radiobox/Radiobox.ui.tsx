import { Component } from 'src/app/Component'

import { Radiobox } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Radiobox}
    name='Radiobox'
    description={description}
    examples={examples}
  />
)
