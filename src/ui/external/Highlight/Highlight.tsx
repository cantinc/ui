import { HTMLProps, Ref } from '@innet/dom'
import hljs from 'highlight.js'
import classes from 'html-classes'

import styles from './Highlight.scss'

export interface HighlightProps extends HTMLProps<HTMLPreElement> {
  code: string
  language?: string
}

export function * Highlight ({
  ref = new Ref<HTMLPreElement>(),
  code,
  language,
  ...props
}: HighlightProps) {
  yield (
    <pre
      {...props}
      class={() => classes([
        'hljs',
        styles.root,
        props.class,
      ])}
      ref={ref}
    />
  )

  if (ref?.value) {
    ref.value.innerHTML = language
      ? hljs.highlight(code, { language }).value
      : hljs.highlightAuto(code).value
  }
}
