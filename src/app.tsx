import dom from '@innet/dom'
import innet from 'innet'

import { App } from './app/App'
import { bindDragOver, bindScrollPosition } from './utils'

bindScrollPosition()
bindDragOver()

innet(<App />, dom)
