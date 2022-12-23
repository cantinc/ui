import { Component } from 'src/app/Component'

import { BurgerButton } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={BurgerButton}
    name='BurgerButton'
    description={description}
    examples={examples}
  />
)
