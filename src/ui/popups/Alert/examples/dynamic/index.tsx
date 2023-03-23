import { type LoopItem } from '@innet/dom'
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

export default example({
  id: 'dynamic',
  title: 'Dynamic',
  description,
  code: `import innet from 'innet'
import dom, { type LoopItem } from '@innet/dom'
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

innet(
  <Flex reverse vertical align='stretch'>
    <for of={alerts} key='id'>
      {(item: LoopItem<AlertData>) => (
        <delay hide={300}>
          <Alert gap={24} justify='between'>
            {() => item.value.text}
            <Button
              onclick={() => {
                removeAlert(item.value.id)
              }}
              view='ghost'
              padding={16}>
              Done
            </Button>
          </Alert>
        </delay>
      )}
    </for>
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
      <for of={alerts} key='id'>
        {(item: LoopItem<AlertData>) => (
          <delay hide={300}>
            <Alert gap={24} justify='between'>
              {() => item.value.text}
              <Button
                onclick={() => {
                  removeAlert(item.value.id)
                }}
                view='ghost'
                padding={16}>
                Done
              </Button>
            </Alert>
          </delay>
        )}
      </for>
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
