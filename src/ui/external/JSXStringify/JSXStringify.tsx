import { useChildren } from '@innet/jsx'

import { Style, style } from '../../../hooks'
import styles from './JSXStringify.scss'

const useStyle = style(styles)

export function JSXStringify (props: Style) {
  const children = useChildren()
  const styles = useStyle()

  let content: any

  function propsStringify (props?: Record<string, any>) {
    if (!props) return null

    const result = []

    for (const prop in props) {
      const propValue = props[prop]

      if (propValue === null || typeof propValue === 'function') {
        content = String(propValue)
      }

      if (typeof propValue === 'string') {
        content = propValue
      }

      if (propValue === false) {
        content = 'false'
      }

      if (typeof propValue === 'number') {
        content = <span class={styles.propNum}>{propValue}</span>
      }

      if (typeof propValue === 'string') {
        content = <span class={styles.propString}>'{content}'</span>
      } else if (propValue !== true) {
        content = <span class={styles.propBraces}>{'{'}{content}{'}'}</span>
      }

      if (propValue !== true) {
        content = (
          <span class={styles.propValue}>={content}</span>
        )
      }

      result.push(
        <span class={styles.prop}>
          <span class={styles.propKey}>{prop}</span>
          {content}
        </span>,
      )
    }

    return result
  }

  function jsxStringify (content: any): any {
    if (content === null) {
      return (
        <span class={styles.nullContent}>
          null
        </span>
      )
    }

    if (typeof content === 'string') {
      return (
        <span class={styles.content}>
          {content}
        </span>
      )
    }

    if (Array.isArray(content)) {
      return content.map(jsxStringify)
    }

    if (typeof content === 'object') {
      let { type, children, props } = content

      if (typeof type === 'function') {
        if (!type.componentName) {
          throw Error(`Add componentName of ${type.name}`)
        }

        type = type.componentName
      }

      const propsResult = propsStringify(props)

      if (children) {
        return (
          <div class={styles.component}>
            <span class={styles.start}>
              {'<'}{type}{propsResult}{'>'}
            </span>
            <div class={styles.children}>
              {jsxStringify(children)}
            </div>
            <span class={styles.end}>
              {'</'}{type}{'>'}
            </span>
          </div>
        )
      } else {
        return (
          <div class={styles.component}>
            <span class={styles.empty}>
              {'<'}{type}{propsResult}{'/>'}
            </span>
          </div>
        )
      }
    }
  }

  return (
    <div class={styles.root}>
      {children?.map(jsxStringify)}
    </div>
  )
}
