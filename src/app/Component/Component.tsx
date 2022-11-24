import { history } from '@innet/dom'

import { Card, Cards, DelayPage, JSXStringify, Markdown, Typography } from '../../ui'
import { AsyncSpin } from '../../ui/content/AsyncSpin'
import styles from './Component.scss'

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
  components?: Record<string, string>
}

export interface UIMeta<C extends UIComponent> {
  component: C
  name: string
  description?: string
  components?: Record<string, string>
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

export async function * Component <C extends UIComponent> ({ is }: ComponentProps<C>) {
  yield <AsyncSpin flex justify='center' align='center' show={300} />

  const {
    component: Component,
    components: mainComponents,
    name,
    examples,
    props,
    description,
  } = (await is()).default

  console.log(Component, props)

  yield (
    <DelayPage gap={16}>
      {description && <Typography><Markdown text={description} /></Typography>}
      {examples && (
        <>
          <h2>Examples:</h2>
          <Cards>
            {examples.map(({ id, example, title, description, components }) => (
              <Card preventAnimation class={() => [styles.example, history.hash === id && styles.active]} vertical id={id} align='stretch'>
                {title || description
                  ? (
                    <Typography>
                      {title && <h3><a href={`#${id}`}>{title}</a>:</h3>}
                      {description && <Markdown text={description} />}
                    </Typography>
                    )
                  : null}
                <div>
                  {example}
                </div>
                <details>
                  <summary>Code</summary>
                  <JSXStringify components={{ [Component.name]: name, ...mainComponents, ...components }}>
                    {example}
                  </JSXStringify>
                </details>
              </Card>
            ))}
          </Cards>
        </>
      )}
    </DelayPage>
  )
}
