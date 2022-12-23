import { Component } from 'src/app/Component'

import { Flex } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Flex}
    name='Flex'
    description={description}
    examples={examples}
  />
)
