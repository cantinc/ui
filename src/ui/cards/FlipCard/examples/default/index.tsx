import { example } from 'src/app/Component'
import { Cards, FlipCard } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const flip = new State(0)

const handleClick = (id: number) => {
  flip.value = flip.value === id ? 0 : id
}

const cards = [...new Array(10)].map((_, i) => i + 1)

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'
import { State } from 'watch-state'

import { Cards, FlipCard } from '@cantinc/ui'

const flip = new State(0)

const handleClick = (id: number) => {
  flip.value = flip.value === id ? 0 : id
}

const cards = [...new Array(10)].map((_, i) => i + 1)

innet(
  <Cards>
    {cards.map(id => (
      <FlipCard
        width={180}
        height={90}
        align='center'
        justify='center'
        backside={\`Back \${id}\`}
        onclick={() => handleClick(id)}
        flip={() => flip.value === id}>
        Front {id}
      </FlipCard>
    ))}
  </Cards>,
  dom,
)`,
  example: (
    <Cards>
      {cards.map(id => (
        <FlipCard
          width={180}
          height={90}
          align='center'
          justify='center'
          backside={`Back ${id}`}
          onclick={() => handleClick(id)}
          flip={() => flip.value === id}>
          Front {id}
        </FlipCard>
      ))}
    </Cards>
  ),
})
