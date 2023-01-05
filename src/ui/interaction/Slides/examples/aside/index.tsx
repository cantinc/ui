import { example } from 'src/app/Component'
import { BurgerButton, Icon, Slide, Slides } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const state = new State(1)

const show = () => {
  state.value = 0
}
const hide = () => {
  state.value = 1
}

const slides: Slide[] = [
  {
    reverse: true,
    padding: 8,
    style: { background: 'var(--color-80)', 'min-width': '200px' },
    children: <Icon icon='cross' onclick={hide} />,
  },
  {
    padding: 16,
    style: {
      background: 'var(--color-70)',
      'min-width': '100%',
      transition: 'all .3s',
      opacity: () => state.value ? '1' : '.5',
    },
    children: <BurgerButton onclick={show} />,
  },
]

export default example({
  id: 'aside',
  title: 'aside',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'
import { State } from 'watch-state'

import { Slides, Slide, BurgerButton, Icon } from '@cantinc/ui'

const state = new State(1)

const show = () => {
  state.value = 0
}
const hide = () => {
  state.value = 1
}

const slides: Slide[] = [
  {
    reverse: true,
    padding: 8,
    style: { background: 'var(--color-80)', 'min-width': '200px' },
    children: <Icon icon='cross' onclick={hide} />,
  },
  {
    padding: 16,
    style: {
      background: 'var(--color-70)',
      'min-width': '100%',
      transition: 'all .3s',
      opacity: () => state.value ? '1' : '.5',
    },
    children: <BurgerButton onclick={show} />,
  },
]

innet(
  <Slides
    slides={slides}
    value={state}
    align='stretch'
  />,
  dom,
)`,
  example: (
    <Slides
      slides={slides}
      value={state}
      align='stretch'
    />
  ),
})
