import { AppLayout } from 'src/app/AppLayout'

import { Notifications } from '../../ui'
import { Async } from '../../ui/external/Async'

export function App () {
  return (
    <AppLayout>
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
        <slot name='icons'>
          <Async
            import={() => import('src/pages/IconsPage')}
            name='IconsPage'
          />
        </slot>
        <slot name='layout'>
          <Async
            import={() => import('src/pages/LayoutPage')}
            name='LayoutPage'
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
        <slot name='forms'>
          <Async
            import={() => import('src/pages/FormsPage')}
            name='FormsPage'
          />
        </slot>
        <slot name='search'>
          <Async
            import={() => import('src/pages/SearchPage')}
            name='SearchPage'
          />
        </slot>
        <slot name='interaction'>
          <Async
            import={() => import('src/pages/InteractionPage')}
            name='InteractionPage'
          />
        </slot>
      </router>
      <portal parent={document.body}>
        <Notifications />
      </portal>
    </AppLayout>
  )
}
