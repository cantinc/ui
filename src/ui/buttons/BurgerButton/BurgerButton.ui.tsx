import { meta } from 'src/app/Component'

import { BurgerButton } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof BurgerButton>({
  component: BurgerButton,
  name: 'BurgerButton',
  description,
  examples,
})
