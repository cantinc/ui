import { Component } from 'src/app/Component'

import { Title } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Title}
    name='Title'
    description={description}
    examples={examples}
  />
)
