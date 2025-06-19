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
      backside='Back vertical'
      onclick={() => handleClick(2)}
      flip={() => flip.value === 2}>
      Front vertical
    </FlipCard>
    <FlipCard
      animation='horizontal'
      width={180}
      height={180}
      align='center'
      justify='center'
      backside='Back horizontal'
      onclick={() => handleClick(1)}
      flip={() => flip.value === 1}>
      Front horizontal
    </FlipCard>
    <FlipCard
      animation='vertical'
      revertAnimation
      width={180}
      height={180}
      align='center'
      justify='center'
      backside='Back vertical revert'
      onclick={() => handleClick(4)}
      flip={() => flip.value === 4}>
      Front vertical revert
    </FlipCard>
    <FlipCard
      animation='horizontal'
      revertAnimation
      width={180}
      height={180}
      align='center'
      justify='center'
      backside='Back horizontal revert'
      onclick={() => handleClick(3)}
      flip={() => flip.value === 3}>
      Front horizontal revert
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
        backside='Back vertical'
        onclick={() => handleClick(2)}
        flip={() => flip.value === 2}>
        Front vertical
      </FlipCard>
      <FlipCard
        animation='horizontal'
        width={180}
        height={180}
        align='center'
        justify='center'
        backside='Back horizontal'
        onclick={() => handleClick(1)}
        flip={() => flip.value === 1}>
        Front horizontal
      </FlipCard>
      <FlipCard
        animation='vertical'
        revertAnimation
        width={180}
        height={180}
        align='center'
        justify='center'
        backside='Back vertical revert'
        onclick={() => handleClick(4)}
        flip={() => flip.value === 4}>
        Front vertical revert
      </FlipCard>
      <FlipCard
        animation='horizontal'
        revertAnimation
        width={180}
        height={180}
        align='center'
        justify='center'
        backside='Back horizontal revert'
        onclick={() => handleClick(3)}
        flip={() => flip.value === 3}>
        Front horizontal revert
      </FlipCard>
    </Cards>
  ),
})
