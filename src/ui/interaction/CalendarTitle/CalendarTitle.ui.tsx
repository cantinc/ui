import { Component } from 'src/app/Component'

import { CalendarTitle } from '.'
import examples from './examples'
import description from './README.md'

export default () => (
  <Component
    component={CalendarTitle}
    name='CalendarTitle'
    description={description}
    examples={examples}
  />
)
