import { example } from 'src/app/Component'
import { Flex, InputMask } from 'src/ui'

import description from './README.md'

export default example({
  id: 'mask',
  title: 'mask',
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
    </Flex>
  ),
})
