import { Layout } from 'src/app/Layout'

import { Notifications } from '../../ui'
import { Async } from '../../ui/external/Async'

export function App () {
  return (
    <Layout>
      <router ish>
        <slot name='/'>
          <Async
            import={() => import('src/pages/HomePage')}
            name='HomePage'
          />
        </slot>
        <slot name='typography'>
          <Async
            import={() => import('src/pages/TypographyPage')}
            name='TypographyPage'
          />
        </slot>
        <slot name='content'>
          <Async
            import={() => import('src/pages/ContentPage')}
            name='ContentPage'
          />
        </slot>
        <slot name='position'>
          <Async
            import={() => import('src/pages/PositionPage')}
            name='PositionPage'
          />
        </slot>
        <slot name='buttons'>
          <Async
            import={() => import('src/pages/ButtonsPage')}
            name='ButtonsPage'
          />
        </slot>
        <slot name='popups'>
          <Async
            import={() => import('src/pages/PopupsPage')}
            name='PopupsPage'
          />
        </slot>
        <slot name='cards'>
          <Async
            import={() => import('src/pages/CardsPage')}
            name='CardsPage'
          />
        </slot>
      </router>
      <portal parent={document.body}>
        <Notifications />
      </portal>
    </Layout>
  )
}
