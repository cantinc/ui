import { example } from 'src/app/Component'
import { Arrow, ArrowDirection, Flex } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const directions: ArrowDirection[] = ['right', 'down', 'top', 'left']

const direction1 = new State<ArrowDirection>('top')
const direction2 = new State<ArrowDirection>('top')
const direction3 = new State<ArrowDirection>('top')
const direction4 = new State<ArrowDirection>('top')
const direction5 = new State<ArrowDirection>('top')
const direction6 = new State<ArrowDirection>('top')

const handleClick = (state: State<ArrowDirection>) => () => {
  const index = directions.indexOf(state.value)

  if (index === directions.length - 1) {
    state.value = directions[0]
    return
  }

  state.value = directions[index + 1]
}

export default example({
  id: 'size',
  title: 'size',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'
import { State } from 'watch-state'

import { Arrow, ArrowDirection, Flex } from '@cantinc/ui'

const directions: ArrowDirection[] = ['right', 'down', 'top', 'left']

const direction1 = new State<ArrowDirection>('top')
const direction2 = new State<ArrowDirection>('top')
const direction3 = new State<ArrowDirection>('top')
const direction4 = new State<ArrowDirection>('top')
const direction5 = new State<ArrowDirection>('top')
const direction6 = new State<ArrowDirection>('top')

const handleClick = (state: State<ArrowDirection>) => () => {
  const index = directions.indexOf(state.value)

  if (index === directions.length - 1) {
    state.value = directions[0]
    return
  }

  state.value = directions[index + 1]
}

innet(
  <Flex gap={16} vertical>
    <Flex align='center' gap={16} wrap>
      <Arrow
        onclick={handleClick(direction1)}
        direction={direction1}
        size={256}
      />
      <Arrow
        onclick={handleClick(direction2)}
        direction={direction2}
        size={128}
      />
      <Arrow
        onclick={handleClick(direction3)}
        direction={direction3}
        size={64}
      />
      <Arrow
        onclick={handleClick(direction4)}
        direction={direction4}
        size={32}
      />
      <Arrow
        onclick={handleClick(direction5)}
        direction={direction5}
        size={18}
      />
      <Arrow
        onclick={handleClick(direction6)}
        direction={direction6}
        size={12}
      />
    </Flex>
  </Flex>,
  dom,
)`,
  example: (
    <Flex gap={16} vertical>
      <Flex align='center' gap={16} wrap>
        <Arrow
          onclick={handleClick(direction1)}
          direction={direction1}
          size={256}
        />
        <Arrow
          onclick={handleClick(direction2)}
          direction={direction2}
          size={128}
        />
        <Arrow
          onclick={handleClick(direction3)}
          direction={direction3}
          size={64}
        />
        <Arrow
          onclick={handleClick(direction4)}
          direction={direction4}
          size={32}
        />
        <Arrow
          onclick={handleClick(direction5)}
          direction={direction5}
          size={18}
        />
        <Arrow
          onclick={handleClick(direction6)}
          direction={direction6}
          size={12}
        />
      </Flex>
    </Flex>
  ),
})
