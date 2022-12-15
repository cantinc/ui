import { HTMLProps, Ref, statePropToWatchProp } from '@innet/dom'
import classes from 'html-classes'
import Prism from 'prismjs'

import styles from './Highlight.scss'

export interface HighlightProps extends HTMLProps<HTMLPreElement> {
  code: string
  language: string
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
        `language-${language}`,
        styles.root,
        statePropToWatchProp(props.class),
      ])}
      ref={ref}
    />
  )

  if (ref?.value && language in Prism.languages) {
    ref.value.innerHTML = Prism.highlight(code, Prism.languages[language], language)
  }
}
