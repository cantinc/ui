import { Component } from 'src/app/Component'

import { Image } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={Image}
    name='Image'
    description={description}
    examples={examples}
  />
)
