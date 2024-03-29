import { type Style, style } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import styles from './JSXStringify.scss'

const useStyle = style(styles)

export interface JSXStringifyProps extends Style {
  components?: Record<string, string>
  functions?: Map<Function, string>
}

export function JSXStringify ({ components, functions }: JSXStringifyProps = {}) {
  const children = useChildren()
  const styles = useStyle()

  function propsStringify (props?: Record<string, any>) {
    if (!props) return null

    const result = []

    for (const prop in props) {
      let content: any
      const propValue = props[prop]

      if (propValue === null) {
        content = <span class={styles.propNull}>{String(propValue)}</span>
      } else if (typeof propValue === 'function') {
        content = <span class={styles.propFunc}>{functions?.has(propValue) ? functions.get(propValue) : String(propValue)}</span>
      } else if (typeof propValue === 'string') {
        content = propValue
      } else if (propValue === false) {
        content = 'false'
      } else if (typeof propValue === 'number') {
        content = <span class={styles.propNum}>{propValue}</span>
      } else if (Array.isArray(propValue)) {
        content = <span class={styles.propArray}>{JSON.stringify(propValue)}</span>
      } else if (typeof propValue === 'object') {
        content = <span class={styles.propObject}>{JSON.stringify(propValue)}</span>
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
        if (!components?.[type.name]) {
          throw Error(`Add component of ${type.name}`)
        }

        type = components[type.name]
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
