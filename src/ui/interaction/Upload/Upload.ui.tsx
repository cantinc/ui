import { Component } from 'src/app/Component'

import { Upload } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Upload}
    name='Upload'
    description={description}
    examples={examples}
  />
)
