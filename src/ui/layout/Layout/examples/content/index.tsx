import { example } from 'src/app/Component'
import { Browser, Content, Footer, Header, Layout, Main } from 'src/ui'

import description from './README.md'

export default example({
  id: 'content',
  title: 'Content',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Layout, Header, Main, Footer } from '@cantinc/ui'

innet(
  <Layout width={640} vertical>
    <Header style='background:var(--color-70)'>
      <Content padding={16} style='background:var(--color-60)'>
        Header
      </Content>
    </Header>
    <Main vertical>
      <Content padding={16} style='background:var(--color-80)'>
        Main
      </Content>
    </Main>
    <Footer style='background:var(--color-90)'>
      <Content padding={16} style='background:var(--color-70)'>
        Footer
      </Content>
    </Footer>
  </Layout>,
  dom,
)`,
  example: (
    <Browser height={320}>
      <Layout width={640} vertical>
        <Header style='background:var(--color-70)'>
          <Content padding={16} style='background:var(--color-60)'>
            Header
          </Content>
        </Header>
        <Main vertical>
          <Content padding={16} style='background:var(--color-80)'>
            Main
          </Content>
        </Main>
        <Footer style='background:var(--color-90)'>
          <Content padding={16} style='background:var(--color-70)'>
            Footer
          </Content>
        </Footer>
      </Layout>
    </Browser>
  ),
})
