import './styles/base.scss'
import './styles/external.global.scss'
import 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'

import dom, { Router } from '@innet/dom'
import innet from 'innet'
import { routing } from 'src/routing'

import { bindDragOver, bindScrollPosition, bindTab, bindWindowHeight } from './utils'

bindScrollPosition()
bindWindowHeight()
bindDragOver()
bindTab()

innet(<Router routing={routing} />, dom)
