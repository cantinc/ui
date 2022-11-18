import { JSXStringify, Markdown, Typography } from '../../ui'

export type UITypes = 'select' | 'text' | 'switch'

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
      {description && <Typography><Markdown text={description} /></Typography>}
      {examples && (
        <>
          <h2>Examples:</h2>
          {examples.map(({ id, example, title, description }) => (
            <div id={id}>
              {title && <h3>{title}:</h3>}
              {description && <Markdown text={description} />}
              {example}
              <details>
                <summary>Code</summary>
                <JSXStringify>
                  {example}
                </JSXStringify>
              </details>
            </div>
          ))}
        </>
      )}
    </>
  )
}
