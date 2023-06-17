import { use, useMapValue } from '@innet/dom'
import { Alert, Button, Flex, Input } from 'src'
import { example } from 'src/app/Component'
import { createEvent, State } from 'watch-state'

import description from './README.md'

interface AlertData {
  id: number
  text: string
}

const alerts = new State<AlertData[]>([])
const text = new State('')
let id = 0
const addAlert = createEvent(() => {
  alerts.value.push({
    id: id++,
    text: text.value,
  })
  alerts.update()
  text.value = ''
})
const removeAlert = (removeId: number) => {
  alerts.value = alerts.value.filter(({ id }) => id !== removeId)
}

function MapAlert () {
  const item = useMapValue<AlertData>()

  return (
    <delay hide={300}>
      <Alert gap={24} justify='between'>
        {() => use(item).text}
        <Button
          onclick={() => {
            removeAlert(use(item).id)
          }}
          view='ghost'
          padding={16}>
          Done
        </Button>
      </Alert>
    </delay>
  )
}

export default example({
  id: 'dynamic',
  title: 'Dynamic',
  description,
  code: `import innet from 'innet'
import { use, useMapValue } from '@innet/dom'
import { createEvent, State } from 'watch-state'

import { Alert, Flex, Button, Input } from '@cantinc/ui'

interface AlertData {
  id: number
  text: string
}

const alerts = new State<AlertData[]>([])
const text = new State('')
let id = 0

const addAlert = createEvent(() => {
  alerts.value.push({
    id: id++,
    text: text.value,
  })

  alerts.update()
  text.value = ''
})

const removeAlert = (removeId: number) => {
  alerts.value = alerts
    .value
    .filter(({ id }) => id !== removeId)
}

function MapAlert () {
  const item = useMapValue<AlertData>()

  return (
    <delay hide={300}>
      <Alert gap={24} justify='between'>
        {() => use(item).text}
        <Button
          onclick={() => {
            removeAlert(use(item).id)
          }}
          view='ghost'
          padding={16}>
          Done
        </Button>
      </Alert>
    </delay>
  )
}

innet(
  <Flex reverse vertical align='stretch'>
    <map of={alerts} key='id'>
      <MapAlert />
    </map>
    <Flex wrap gap={24}>
      <Input
        flex
        placeholder='Enter alert text'
        value={text}
      />
      <Button onclick={addAlert}>
        Add
      </Button>
    </Flex>
  </Flex>,
  dom,
)`,
  example: (
    <Flex reverse vertical align='stretch'>
      <map of={alerts} key='id'>
        <MapAlert />
      </map>
      <Flex wrap gap={24}>
        <Input
          flex
          placeholder='Enter alert text'
          value={text}
        />
        <Button onclick={addAlert}>
          Add
        </Button>
      </Flex>
    </Flex>
  ),
})
