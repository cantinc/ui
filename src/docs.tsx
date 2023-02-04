import './styles/base.scss'
import './styles/external.global.scss'
import 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-bash'

import dom from '@innet/dom'
import innet from 'innet'
import { App } from 'src/app/App'

import { bindDragOver, bindScrollPosition, bindTab, bindWindowHeight } from './utils'

bindScrollPosition()
bindWindowHeight()
bindDragOver()
bindTab()

innet(<App />, dom)
