import { Component } from 'src/app/Component'

import { FormUpload } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={FormUpload}
    name='FormUpload'
    description={description}
    examples={examples}
  />
)
