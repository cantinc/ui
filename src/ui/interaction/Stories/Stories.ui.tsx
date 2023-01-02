import { Component } from 'src/app/Component'

import { Stories } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Stories}
    name='Stories'
    description={description}
    examples={examples}
  />
)
