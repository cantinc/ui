import { example } from 'src/app/Component'
import { Notifications } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'default',
  description,
  example: (
    <div>
      Notifications will be added here:
      <Notifications />
    </div>
  ),
})
