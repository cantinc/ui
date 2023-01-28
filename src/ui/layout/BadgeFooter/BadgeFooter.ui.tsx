import { Component } from 'src/app/Component'

import { BadgeFooter } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={BadgeFooter}
    name='BadgeFooter'
    description={description}
    examples={examples}
  />
)
