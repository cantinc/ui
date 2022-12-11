import { example } from 'src/app/Component'
import { Browser, Layout } from 'src/ui'

import description from './README.md'

export default example({
  id: 'padding',
  title: 'padding',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Layout } from '@cantinc/ui'

innet(
  <Layout padding={20}>
    Content
  </Layout>,
  dom,
)`,
  example: (
    <Browser height={320}>
      <Layout padding={20}>
        Content
      </Layout>
    </Browser>
  ),
})
