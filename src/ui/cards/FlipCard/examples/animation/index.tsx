import { example } from 'src/app/Component'
import { Cards, FlipCard } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const flip = new State(0)

const handleClick = (id: number) => {
  flip.value = flip.value === id ? 0 : id
}

export default example({
  id: 'animation',
  title: 'animation',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'
import { State } from 'watch-state'

import { Cards, FlipCard } from '@cantinc/ui'

const flip = new State(0)

const handleClick = (id: number) => {
  flip.value = flip.value === id ? 0 : id
}

innet(
  <Cards>
    <FlipCard
      animation='vertical'
      width={180}
      height={180}
      align='center'
      justify='center'
      onclick={() => handleClick(2)}
      flip={() => flip.value === 2}>
      Front vertical
      <slot name='backside'>
        Back vertical
      </slot>
    </FlipCard>
    <FlipCard
      animation='horizontal'
      width={180}
      height={180}
      align='center'
      justify='center'
      onclick={() => handleClick(1)}
      flip={() => flip.value === 1}>
      Front horizontal
      <slot name='backside'>
        Back horizontal
      </slot>
    </FlipCard>
    <FlipCard
      animation='vertical'
      revertAnimation
      width={180}
      height={180}
      align='center'
      justify='center'
      onclick={() => handleClick(4)}
      flip={() => flip.value === 4}>
      Front vertical revert
      <slot name='backside'>
        Back vertical revert
      </slot>
    </FlipCard>
    <FlipCard
      animation='horizontal'
      revertAnimation
      width={180}
      height={180}
      align='center'
      justify='center'
      onclick={() => handleClick(3)}
      flip={() => flip.value === 3}>
      Front horizontal revert
      <slot name='backside'>
        Back horizontal revert
      </slot>
    </FlipCard>
  </Cards>,
  dom,
)`,
  example: (
    <Cards>
      <FlipCard
        animation='vertical'
        width={180}
        height={180}
        align='center'
        justify='center'
        onclick={() => handleClick(2)}
        flip={() => flip.value === 2}>
        Front vertical
        <slot name='backside'>
          Back vertical
        </slot>
      </FlipCard>
      <FlipCard
        animation='horizontal'
        width={180}
        height={180}
        align='center'
        justify='center'
        onclick={() => handleClick(1)}
        flip={() => flip.value === 1}>
        Front horizontal
        <slot name='backside'>
          Back horizontal
        </slot>
      </FlipCard>
      <FlipCard
        animation='vertical'
        revertAnimation
        width={180}
        height={180}
        align='center'
        justify='center'
        onclick={() => handleClick(4)}
        flip={() => flip.value === 4}>
        Front vertical revert
        <slot name='backside'>
          Back vertical revert
        </slot>
      </FlipCard>
      <FlipCard
        animation='horizontal'
        revertAnimation
        width={180}
        height={180}
        align='center'
        justify='center'
        onclick={() => handleClick(3)}
        flip={() => flip.value === 3}>
        Front horizontal revert
        <slot name='backside'>
          Back horizontal revert
        </slot>
      </FlipCard>
    </Cards>
  ),
})
