import { example } from 'src/app/Component'
import { Aside, Browser, Layout, Main } from 'src/ui'

import description from './README.md'

export default example({
  id: 'aside',
  title: 'Aside',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Layout, Main } from '@cantinc/ui'

innet(
  <Layout gap={20} padding={20} style='background:var(--color-90)'>
    <Aside>
      Aside
    </Aside>
    <Main padding={32} style='background:var(--color-100);border-radius:6px'>
      Main
    </Main>
  </Layout>,
  dom,
)`,
  example: (
    <Browser height={320}>
      <Layout gap={20} padding={20} style='background:var(--color-90)'>
        <Aside>
          Aside
        </Aside>
        <Main padding={32} style='background:var(--color-100);border-radius:6px'>
          Main
        </Main>
      </Layout>
    </Browser>
  ),
})
