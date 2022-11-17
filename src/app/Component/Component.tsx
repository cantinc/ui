import { Markdown } from '../../ui'

export type UITypes = 'select' | 'text'

export interface UIComponentProp {
  type: UITypes
  values?: string[]
  description?: string
}

export type UIComponent = (props: any) => any

export interface UIExample {
  id: string
  example: any
  title?: string
  description?: string
}

export interface UIMeta<C extends UIComponent> {
  component: C
  description?: string
  props?: Record<keyof Parameters<C>[0], UITypes | UIComponentProp>
  examples?: UIExample[]
}

export interface ComponentProps <C extends UIComponent> {
  is: () => Promise<{ default: UIMeta<C> }>
}

export function meta <C extends UIComponent> (meta: UIMeta<C>) {
  return meta
}

export function example (example: UIExample): UIExample {
  return example
}

function jsxStringifyProps (props?: Record<string, any>): string {
  if (!props) return ''

  let result = ''

  for (const prop in props) {
    const propValue = props[prop]

    if (typeof propValue === 'string') {
      result += ` ${prop}='${props[prop]}'`
      continue
    }

    if (typeof propValue === 'boolean') {
      if (propValue) {
        result += ` ${prop}`
      } else {
        result += ` ${prop}={false}`
      }
    }
  }

  return result
}

export function jsxStringify (content: any): string {
  if (content === null) return 'null'
  if (typeof content === 'string') return content

  if (Array.isArray(content)) {
    return content.map(jsxStringify).join('\n')
  }

  if (typeof content === 'object') {
    let { type, children, props } = content

    const strProps = jsxStringifyProps(props)

    if (typeof type === 'function') {
      type = type.name
    }

    if (typeof type === 'string') {
      if (children) {
        return `<${type}${strProps}>
  ${jsxStringify(children).replaceAll('\n', '\n  ')}
</${type}>`
      } else {
        return `<${type}${strProps} />`
      }
    }
  }

  return ''
}

export async function Component <C extends UIComponent> ({ is }: ComponentProps<C>) {
  const {
    component: Component,
    examples,
    props,
    description,
  } = (await is()).default

  console.log(Component, props)

  return (
    <>
      {description && <Markdown text={description} />}
      {examples && (
        <>
          <h2>Examples:</h2>
          {examples.map(({ id, example, title, description }) => (
            <div>
              {title && <h3>{title}</h3>}
              {description && <Markdown text={description} />}
              {example}
              <details>
                <summary>Code</summary>
                <pre>
                  {jsxStringify(example)}
                </pre>
              </details>
            </div>
          ))}
        </>
      )}
    </>
  )
}
