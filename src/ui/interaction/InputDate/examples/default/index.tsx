import { example } from 'src/app/Component'
import { InputDate } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Flex, InputMask } from '@cantinc/ui'

innet(
  <Flex vertical>
    <InputMask
      label='Visible mask'
      name='phone'
      mask='+7 (999) 999-99-99'
    />
    <InputMask
      label='Unvisible mask'
      name='phone'
      mask={{
        mask: '+7 (999) 999-99-99',
        jitMasking: true,
      }}
    />
  </Flex>,
  dom,
)`,
  example: (
    <InputDate
      oninput={date => console.log(date)}
      label='Your Birthday'
    />
  ),
})
