import { Component } from 'src/app/Component'

import { DropdownMenu } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={DropdownMenu}
    name='DropdownMenu'
    description={description}
    examples={examples}
  />
)
