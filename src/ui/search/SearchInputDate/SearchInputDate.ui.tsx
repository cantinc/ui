import { Component } from 'src/app/Component'

import { SearchInputDate } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={SearchInputDate}
    name='SearchInputDate'
    description={description}
    examples={examples}
  />
)
