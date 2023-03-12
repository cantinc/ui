import { Component } from 'src/app/Component'

import { CardsFlex } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={CardsFlex}
    name='CardsFlex'
    description={description}
    examples={examples}
  />
)
