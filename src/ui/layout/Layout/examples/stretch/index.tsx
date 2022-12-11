import { example } from 'src/app/Component'
import { Browser, Footer, Header, Layout, Main } from 'src/ui'

import description from './README.md'

export default example({
  id: 'stretch',
  title: 'Stretch',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Layout, Header, Main, Footer } from '@cantinc/ui'

innet(
  <Layout vertical>
    <Header padding={16} style='background:var(--color-80)'>
      Header
    </Header>
    <Main padding={16} style='background:var(--color-90)'>
      Main
    </Main>
    <Footer padding={16} style='background:var(--color-70)'>
      Footer
    </Footer>
  </Layout>,
  dom,
)`,
  example: (
    <Browser height={320}>
      <Layout vertical>
        <Header padding={16} style='background:var(--color-70)'>
          Header
        </Header>
        <Main padding={16}>
          Main
        </Main>
        <Footer padding={16} style='background:var(--color-90)'>
          Footer
        </Footer>
      </Layout>
    </Browser>
  ),
})
