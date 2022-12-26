import { example } from 'src/app/Component'
import { Button, Input } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const loading = new State(true)

const toggle = () => {
  loading.value = !loading.value
}

export default example({
  id: 'loading',
  title: 'loading',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'
import { State } from 'watch-state'

import { Input, Button } from '@cantinc/ui'

const loading = new State(true)

const toggle = () => {
  loading.value = !loading.value
}

innet(
  <>
    <Input label='Loading' loading={loading} />
    <Button onclick={toggle}>
      Click Me
    </Button>
  </>,
  dom,
)`,
  example: (
    <>
      <Input label='Loading' loading={loading} />
      <Button onclick={toggle}>
        Click Me
      </Button>
    </>
  ),
})
