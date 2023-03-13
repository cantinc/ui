import { Component } from 'src/app/Component'

import { CloseButton } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={CloseButton}
    name='CloseButton'
    description={description}
    examples={examples}
  />
)
