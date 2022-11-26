import { meta } from 'src/app/Component'

import { Button } from '../../buttons'
import { Modal } from '../Modal'
import { Modals } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof Modals>({
  component: Modals,
  name: 'Modals',
  description,
  components: {
    [Modal.name]: 'Modal',
    [Button.name]: 'Button',
  },
  examples,
})
